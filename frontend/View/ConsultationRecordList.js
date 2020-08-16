import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import ListItem from '../Components/ListItem'
import { ScrollView } from 'react-native-gesture-handler'
import { getRecordByPeriod } from '../api/consultation'
import { Card, Divider, Button, Snackbar } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
import Loading from '../Components/Loading'
import { Text, View, StyleSheet } from 'react-native'

export default ({ navigation }) => {
  // date state
  const toDay = new Date()
  toDay.setHours(toDay.getHours() + 8)
  const [fromDate, setFromDate] = useState(toDay);
  const [toDate, setToDate] = useState(toDay);
  const [listData, setListData] = useState([])

  const add8Hour = date => {
    date.setHours(date.getHours() + 8)
    return date
  }

  const onFromDateChange = (event, selectedDate) => {
    let currentDate = selectedDate || date;
    setShowFrom(Platform.OS === 'ios');
    setFromDate(add8Hour(currentDate));
  };
  const onToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowTo(Platform.OS === 'ios');
    setToDate(add8Hour(currentDate));
  };

  // layout 
  const [showFrom, setShowFrom] = useState(false)
  const [showTo, setShowTo] = useState(false)
  const [curr, setCurr] = useState('FROM')

  // loading
  const [loading, setLoading] = useState(false)

  // error msg
  const [showError, setShowError] = useState({ show: false, msg: '' })

  const selectFromClick = () => {
    setCurr("FROM")
    setShowFrom(true)
  }

  const selectToClick = () => {
    setCurr("TO")
    setShowTo(true)
  }

  const closeClick = () => {
    setShowFrom(false)
    setShowTo(false)
  }

  // call api function
  const getConsultationData = async () => {
    setLoading(true)
    let res = await getRecordByPeriod(fromDate.toISOString().slice(0, 10), toDate.toISOString().slice(0, 10))
    if (res.status === 200) {
      setListData(res.data.result)
      setLoading(false)
    } else {
      setShowError({ show: true, msg: res.data.msg })
      setLoading(false)
    }
  }

  useEffect(() => {
    getConsultationData()
  }, [fromDate, toDate])

  // disable the back action
  useEffect(() => navigation.addListener('beforeRemove', (e) => {
    e.preventDefault();
  }), [navigation]);

  return (
    <Container>
      <Card style={{marginBottom: 10, marginTop: 10}}>
        <View style={{flexDirection: 'row' }}>
          <Text style={styles.text}>From:</Text>
          <Button icon="square-edit-outline" onPress={selectFromClick} style={styles.dataPick}>
            {fromDate?.toISOString()?.slice(0, 10)}
          </Button>
        </View>
        <Divider />
        <View style={{flexDirection: 'row' }}>
          <Text style={styles.text}>TO:</Text>
          <Button icon="square-edit-outline" onPress={selectToClick} style={styles.dataPick}>
            {toDate?.toISOString()?.slice(0, 10)}
          </Button>
        </View>
        {(showFrom || showTo) && (
          <>
            {Platform.OS === 'ios' &&
              <Button style={{ alignSelf: 'flex-end' }} onPress={closeClick}>close</Button>
            }
            <DateTimePicker
              testID="dateTimePicker"
              value={curr === 'FROM' ? fromDate : toDate}
              mode={'date'}
              display="spinner"
              onChange={curr === "FROM" ? onFromDateChange : onToDateChange}
            />
          </>)}
      </Card>
      {loading ?
        <Loading />
        :
        <ScrollView style={{ flex: 1 }}>
          {listData?.map((item, index) => {
            return (
              <React.Fragment key={index} >
                <ListItem key={index} item={item} />
                <Divider />
              </React.Fragment>
            )
          })}
        </ScrollView>
      }

      <Snackbar
        visible={showError.show}
        onDismiss={() => setShowError({ show: false, msg: '' })}
      >
        {showError.msg}
      </Snackbar>
    </Container>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    paddingLeft: 10,
    width: 100
  },
  dataPick: {
    flex: 1,
  }
})