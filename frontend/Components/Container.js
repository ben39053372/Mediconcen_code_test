import React from 'react'
import { SafeAreaView, KeyboardAvoidingView, StyleSheet } from 'react-native'

export default props => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <KeyboardAvoidingView style={styles.keyboardView} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
  },
  SafeAreaView: {
    flex: 1,
  },
})