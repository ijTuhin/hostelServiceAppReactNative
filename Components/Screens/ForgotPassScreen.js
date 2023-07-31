import { View, Text, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import ResetForm from "../Authentication/ResetForm";

const ForgotPassScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.top}>
        <Text style={{ fontSize: 20, color:"#d4d4d4", paddingHorizontal:2 }}>
          Provide Your Email Address to Reset Password
        </Text>
      </View>
      <ResetForm navigation={navigation} />
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
    alignItems: "flex-start",
    paddingHorizontal: 60,
    width: "100%",
    // marginTop:33.6
  },
  top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 12
  },
});
export default ForgotPassScreen;