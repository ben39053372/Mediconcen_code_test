import React from 'react'
import {StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper'

const SignUpInput = props =>
  <TextInput
    {...props}
    mode="outlined"
    style={styles.textInput}
    dense
  />

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#fff'
  }
})

export default SignUpInput

