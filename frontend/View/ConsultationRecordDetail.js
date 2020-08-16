import React, { useState, useEffect } from 'react'
import { Card, Title, Paragraph, Divider, Button } from 'react-native-paper'
import { getRecordById } from '../api/consultation'
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default props => {
  const navigation = useNavigation();
  const [thisData, setThisData] = useState({})

  // call api function
  const getData = async id => {
    console.log('000')
    let res = await getRecordById(id)
    console.log(res)
    if (res.status === 200) {
      setThisData(res.data.result[0])
    }
  }

  useEffect(() => {
    getData(props.route.params.record_id)
  }, [props])

  // go to followup consultation
  const goToFollowupConsultation = id => {
    navigation.push('Consultation Detail', { record_id: id })
  }
  return (
    <Card>
      <Card.Content>
        <ScrollView>
          {thisData ?
            Object.keys(thisData).map((key, index) => {
              if (thisData[key]) {
                return (
                  <View key={index} style={styles.view}>
                    <Title>{key}</Title>
                    {key === 'Followup Consultation ID' ?
                      <Button onPress={() => goToFollowupConsultation(thisData[key])}>
                        {thisData[key]}
                      </Button>
                      :
                      <Paragraph style={{ textAlign: 'right' }}>
                        {key === "Date Time" ?
                          thisData[key].slice(0, 16).replace('T', ' ')
                          :
                          thisData[key]
                        }
                      </Paragraph>
                    }
                    <Divider />
                  </View>
                )
              }

            }) :
            <Title> ERROR NO THIS RECORD</Title>
          }
        </ScrollView>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 2,
    borderBottomColor: '#f93'
  },
  title: {
    textDecorationColor: '#f93',
    textDecorationLine: 'underline'
  },
  value: {

  }
})