import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  const logo = require("../../assets/IIUClogo.jpg");
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.top}>
        <Text style={{ fontSize: 32 }}>
          Welcome, Sign in to your Account
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontStyle: "italic",
            marginVertical: 4,
          }}
        >
          Female Hostel Service
        </Text>
      </View>
      <LoginForm />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    marginTop: 28,
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    width: "100%",
  },
  top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 24
  },
});
export default LoginScreen;