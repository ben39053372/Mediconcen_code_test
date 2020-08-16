import React from 'react'
import { StyleSheet } from 'react-native'
import { List, Surface } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default props => {
  const navigation = useNavigation();
  return (
    <Surface style={styles.surface}>
      <List.Item
        {...props}
        style={styles.listItem}
        title={`${props.item.doctor_name} : ${props.item.patient_name}`}
        description={`${props.item.clinic_name} - ${props.item.datetime.slice(0, 16).replace('T', ' ')}`}
        left={() =><List.Icon icon="account-box" />}
        onPress={() => navigation.navigate('Consultation Detail', {record_id: props.item.record_id})}
      />
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 3,
    elevation: 10,
    marginBottom: 5,
  },
  listItem: {
    backgroundColor: '#fff',
    borderBottomColor: '#f93',
    borderBottomWidth: 2,
    padding: 0
  }
})