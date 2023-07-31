import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import LoginForm from "../Authentication/LoginForm";

const LoginScreen = ({ navigation }) => {
  const logo = require("../../assets/app-icon.png");
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.top}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "cover",
          }}
          source={logo}
        />
        <Text
          style={{
            fontSize: 16,
            fontStyle: "italic",
            marginVertical: 4,
            color: "#0f766e",
            width:60
          }}
        >
          Female Hostel Service
        </Text>
      </View>
      <Text style={{ fontSize: 32, 
    marginBottom: 12, color: "#d4d4d8" }}>
        Welcome, Sign in to your Account
      </Text>
      <LoginForm navigation={navigation} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#020617",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    width: "100%",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 16,
  },
});
export default LoginScreen;
