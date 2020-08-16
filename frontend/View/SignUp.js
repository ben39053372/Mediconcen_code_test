import React, { useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Title, Button, Snackbar } from 'react-native-paper'
import SignUpInput from '../Components/SignUpInput'
import Container from '../Components/Container'
import { userSignUp } from '../api/user'
import * as Crypto from 'expo-crypto';
import {setItem} from '../localStore'

export default ({ navigation }) => {
  // input data state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_2nd, setPassword_2nd] = useState('')
  const [clinic_name, setClinicName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')

  // layout state
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState({ show: false, msg: '' })

  // use for render the input form
  const form = [
    { label: "Email", value: email, onChangeText: setEmail },
    { label: "Password", value: password, onChangeText: setPassword },
    { label: "Comfirm Password", value: password_2nd, onChangeText: setPassword_2nd },
    { label: "Clinic Name", value: clinic_name, onChangeText: setClinicName },
    { label: "Phone Number", value: phone_number, onChangeText: setPhoneNumber },
    {
      label: "Address", value: address, onChangeText: setAddress,
      multiline: true,
      numberOfLines: 4,
      maxLength: 200,
      maxHeight: 200
    },
  ]

  // call api function
  const onSubmitClick = async () => {
    setLoading(true)
    let data = {
      email,
      password: await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
      ),
      clinic_name,
      phone_number,
      address
    }
    let res = await userSignUp(data)
    if (res.status === 200) {
      // sccuess
      setLoading(false)
      setShowError({ show: true, msg: res.data.msg })
      setItem('token',res.data.token)
      setTimeout(() => {
        navigation.navigate("Login")
      }, 1000)
    } else {
      // error
      setLoading(false)
      setShowError({ show: true, msg: res.data.msg })
    }
  }

  return (
    <Container style={styles.container}>
      <Title> Sign Up </Title>
      {form.map((value, index) => {
        return (
          <SignUpInput
            {...value}
            key={index}
            onChangeText={text => value.onChangeText(text)}
          />
        )
      })}
      <Button
        mode="contained"
        style={{ marginTop: 20, marginBottom: 20 }}
        onPress={() => onSubmitClick()}
        loading={loading}
      >
        Submit
      </Button>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonView: {
    padding: 20,
    flexDirection: 'row',
    alignContent: "space-between",
  },
  button: {
    flex: 1,
    margin: 10,
    height: 40
  },
  Title: {
    padding: 20,
    fontSize: 40,
    textAlign: "center",
  },
});