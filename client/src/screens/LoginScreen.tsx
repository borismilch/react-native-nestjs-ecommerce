import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { LoginForm } from '../components/auth'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView  style={styles.container}>

       <LoginForm />

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    

  },
  container: {
    marginBottom: 30
  },

})