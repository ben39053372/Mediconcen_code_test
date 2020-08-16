import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Container from '../Components/Container'
import { Title, TextInput, Button, Snackbar } from 'react-native-paper'
import { userLogin } from '../api/user'
import * as Crypto from 'expo-crypto';
import { setItem } from '../localStore'
import {useDispatch} from 'react-redux'

export default ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // layout state
  const [loading, setLoading] = useState(false)
  const [showError, setShowError] = useState({ show: false, msg: '' })

  // call api function
  const dispatch = useDispatch()
  const onLoginClick = async () => {
    setLoading(true)
    let res = await userLogin({
      email,
      password: await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
      )
    })
    if (res.status === 200) {
      // sccuess
      dispatch({
        type: 'SAVE_TOKEN',
        payload: {
          token: res.data.token
        }
      })
      setItem('token', res.data.token)
      setLoading(false)
    } else {
      // error
      setLoading(false)
      setShowError({ show: true, msg: res.data.msg })
    }
  }

  return (
    <Container style={styles.container}>
      <Title style={styles.Title}>User Login</Title>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.buttonView}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => onLoginClick()}
          loading={loading}
        >
          Login
        </Button>
        <Button
          mode="outlined"
          style={styles.button}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign Up
        </Button>
      </View>
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