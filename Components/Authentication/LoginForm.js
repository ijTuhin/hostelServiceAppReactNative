import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Enter Gsuit"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Text style={styles.btn}>Sign-In</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
    //   margin: 12,
      borderBottomWidth: 1,
      borderBottomColor: "rgb(209, 213, 219)",
      padding: 10,
      width:306.4
    },
    btn: {
      height: 40,
    //   margin: 12,
      borderWidth: 1,
      borderColor: "rgb(209, 213, 219)",
      padding: 10,
      width:304,
      marginTop:12,
      textAlign:"center",
      textAlignVertical:"center"
    },
  });
export default LoginForm