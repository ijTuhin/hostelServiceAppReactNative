import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import { payMonth } from "../../../Hooks/Conditions";

const PayRent = ({ paid }) => {
  return (
    <View style={styles.box}>
      <Text style={{ fontSize: 18.4 }}>Bill Month</Text>
      <Text
        style={{ fontSize: 26.4, fontWeight: 700, color: "#374151" }}
      >
        {payMonth}
      </Text>
      <Text style={{ color: "#EF4444", fontWeight: 600 }}>not paid</Text>
      <TouchableRipple
        style={{
          marginHorizontal: 24,
          marginVertical: 24,
        }}
        onPress={() => {
          paid(1);
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={[styles.menu]}>Recharge now</Text>
      </TouchableRipple>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  menu: {
    borderRadius: 6.4,
    paddingVertical: 16,
    paddingHorizontal: 40,
    textAlign: "center",
    fontSize: 21.6,
    backgroundColor: "#0E7490",
    opacity: 0.85,
    color: "white",
    boxShadow:
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
});
export default PayRent;
