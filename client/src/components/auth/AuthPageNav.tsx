import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouting } from '../../hooks'
import { TouchableOpacity } from 'react-native'

interface AuthPageNavProps {
  text: string,
  linkText: string,
  link: string
  noOr?: boolean
}

const AuthPageNav: React.FC<AuthPageNavProps> = (props) => {
  const { link, linkText, text, noOr = false } = props

  const { navigateTo } = useRouting()

  return (
    <View style={styles.wrapper}>
       
      <Text style={styles.text}>{text}</Text>

      <TouchableOpacity  onPress={navigateTo(link)}>
        <Text  style={styles.link}>{linkText}</Text>
      </TouchableOpacity>

      { !noOr && <Text style={styles.text}>or</Text>}
    
    </View>
  )
}

export default AuthPageNav

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 10,
    paddingTop: 6,
    alignItems: "center"
  },
  text: {
    marginRight: 7,
    color: "gray",
    fontWeight: "bold"
  },
  link: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#16a34a",
    marginRight: 5
  }
})