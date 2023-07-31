import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { useAuth } from "./AuthContext";
import { emailValidity } from "../Hooks/Conditions";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../configFirebase";

const ResetForm = ({ navigation }) => {
  const { UserLogin } = useAuth();
  const [data, setData] = useState({});
  const [error, setError] = useState(<></>);
  const SendRequest = async () => {
    try {
      const user = await sendPasswordResetEmail(auth, data.email).then(() => {
        console.log("Gotcha!!");
        navigation.navigate("Login");
      });
      console.log(user);
    } catch (error) {
      console.log("error line-26", error);
    }
  };
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
        placeholder="Email Address"
        placeholderTextColor="#a1a1aa"
      />
      <Text
        onPress={() => {
          if (isObjEmpty(data)) {
            setError(null);
          } else if (isValidEmail(data.email) || data.password >= 7) {
            SendRequest();
          }
        }}
        style={styles.btn}
      >
        Send Request
      </Text>

      <Text
        onPress={() => {
          console.log("Go to Login");
          navigation.navigate("Login");
        }}
        style={{
          marginVertical: 20,
          marginHorizontal: 4,
          fontSize: 12,
          color: "#a1a1aa",
          textAlign: "center",
        }}
      >
        Cancel
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
    color: "#ddd",
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
    color: "#ddd",
    backgroundColor: "#164e63",
  },
  error: {
    marginBottom: 4,
    paddingVertical: 16,
    fontSize: 16,
    width: 306.4,
    backgroundColor: "rgb(254, 242, 242)",
    color: "#ef4444",
    textAlign: "center",
    opacity: 0.75,
  },
  validity: {
    marginTop: 4,
    color: "#65a30d",
    textAlign: "right",
  },
});
export default ResetForm;
