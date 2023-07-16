import { Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import { useAuth } from "../../../Authentication/AuthContext";

const PaymentBtn = ({ change, item }) => {
  const {data, payMealBill} = useAuth();
  const mealPayment = () => {
    const value = {
      package: item/3,
      trxID: "TxrGhKmliZs",
      phone: data.user.phone,
    };
    payMealBill(value)
    change(2);
  };
  return (
    <TouchableRipple
      style={{
        marginHorizontal: 24,
        marginTop: 20,
      }}
      onPress={() => {
        mealPayment();
      }}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <Text style={[styles.menu]}>Confirm Payment</Text>
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
  },
});

export default PaymentBtn;
