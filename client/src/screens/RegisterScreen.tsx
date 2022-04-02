import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RegisterForm } from '../components/auth'
const RegisterScreen = () => {

  const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  container: {
    marginBottom:  130
  },

})

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView  style={styles.container}>

       <RegisterForm />

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen