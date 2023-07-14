import { Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";

const PaymentBtn = ({change}) => {
  return (
    <TouchableRipple
      style={{
        marginHorizontal: 24,
        marginTop: 20,
      }}
      onPress={() => {
        change(1);
      }}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Text style={[styles.menu]}>
        Confirm Payment
      </Text>
    </TouchableRipple>
  );
};
const styles = StyleSheet.create({
  menu: {
    borderRadius: 6.4,
    padding: 18.4,
    textAlign: "center",
    fontSize: 18.4,
    backgroundColor: "#0E7490",
    opacity: 0.85,
    color: "white",
    // boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
  }
});

export default PaymentBtn;
