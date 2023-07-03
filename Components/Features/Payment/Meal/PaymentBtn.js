import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";

const PaymentBtn = ({added}) => {
  return (
    <TouchableRipple
      onPress={() => {
        // setSelectedTab(0);
      }}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Text
        style={[styles.menu, added ? styles.notActive : styles.active]}
      >
        Confirm Payment
      </Text>
    </TouchableRipple>
  );
};
const styles = StyleSheet.create({
  menu:{
    borderRadius:"0.4rem",
    marginHorizontal:"1.5rem",
    marginTop:"5.5rem",
    padding:"1.5rem",
    textAlign:"center",
    fontSize:"1.35rem"
  },
  notActive:{
    border:"1px solid #ddd",
    color:"darkgray"
  },
  active:{
    backgroundColor:"#0E7490",
    opacity:"0.85",
    color:"white"
  }
});

export default PaymentBtn;
