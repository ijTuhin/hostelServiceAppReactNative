import { Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";

const PaymentBtn = ({change}) => {
  return (
    <TouchableRipple
      style={{
        marginHorizontal: "1.5rem",
        marginTop: "3.5rem",
      }}
      onPress={() => {
        // setSelectedTab(0);
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
    borderRadius: "0.4rem",
    padding: "1.25rem",
    textAlign: "center",
    fontSize: "1.35rem",
    backgroundColor: "#0E7490",
    opacity: "0.85",
    color: "white",
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
  }
});

export default PaymentBtn;
