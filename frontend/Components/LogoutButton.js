import React from 'react'
import {Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import {setItem} from '../localStore'
import {useDispatch} from 'react-redux'

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const Logout = async () => {
    await setItem('token', '')
    dispatch({
      type: 'SAVE_TOKEN',
      payload: {
        token: null
      }
    })
  }
  return (
    <Button mode="contained" style={{marginRight: 10}} onPress={Logout}>
      Logout
    </Button>
  )
}