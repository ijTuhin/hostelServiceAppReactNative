import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";

const LoginForm = ({navigation}) => {
  const emailValidity =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [data, setData] = useState({});
  const [error, setError] = useState(<></>);
  function isValidEmail(email) {
    return emailValidity.test(email);
  }
  function isObjEmpty(obj) {
    return (
      obj.email === "" || obj.password === "" || JSON.stringify(obj) === "{}"
    );
  }
  return (
    <View>
      {isObjEmpty(data) && error === null && (
        <>
          <Text style={[styles.error]}>please enter a valid email address</Text>
        </>
      )}
      {data.email && !isValidEmail(data.email) && (
        <>
          <Text style={[styles.validity]}>
            please enter a valid email address
          </Text>
        </>
      )}
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setData({
            ...data,
            email: e,
          });
          console.warn(data.email, data.password);
        }}
        onBlur={() => {
          if (!isValidEmail(data.email)) {
            setError(
              <>
                <Text style={[styles.validity]}>
                  please enter a valid email address
                </Text>
              </>
            );
          } else {
            setError(<></>);
          }
        }}
        placeholder="Enter Gsuit"
      />
      {data.password?.length < 8 && data.password?.length !== 0 && (
        <>
          <Text style={[styles.validity]}>
            password should contain at least 8 character
          </Text>
        </>
      )}
      <TextInput
        style={styles.input}
        onChangeText={(e) => {
          setData({
            ...data,
            password: e,
          });
        }}
        onKeyPress={({ nativeEvent }) => {
          if (nativeEvent.key === "Backspace") {
            console.warn(data.password?.length, data.password);
            if (data.password?.length - 2 < 7) {
              setError(
                <>
                  <Text style={[styles.validity]}>
                    password should contain at least 8 character
                  </Text>
                </>
              );
            } else {
              setError(<></>);
            }
          } else {
            if (data.password?.length < 7) {
              setError(
                <>
                  <Text style={[styles.validity]}>
                    password should contain at least 8 character
                  </Text>
                </>
              );
            } else {
              setError(<></>);
            }
          }
        }}
        placeholder="Password"
      />
      <Text
        onPress={() => {
          if (isObjEmpty(data)) {
            setError(null);
          } else if (isValidEmail(data.email) || data.password >= 8) {
            console.warn("Send data to DB", data);
            navigation.navigate('Home')
          }
          console.warn(data);
        }}
        style={styles.btn}
      >
        Sign-In
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(209, 213, 219)",
    padding: 10,
    width: 306.4,
  },
  btn: {
    height: 40,
    borderWidth: 1,
    borderColor: "rgb(209, 213, 219)",
    padding: 10,
    width: 304,
    marginTop: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },
  error: {
    marginBottom: 4,
    paddingVertical: 16,
    fontSize: 16,
    width: 306.4,
    backgroundColor: "rgb(254, 242, 242)",
    color: "rgb(239, 68, 68)",
    textAlign: "center",
    opacity: 0.75,
  },
  validity: {
    marginTop: 4,
    color: "rgb(239, 68, 68)",
    textAlign: "right",
  },
});
export default LoginForm;
