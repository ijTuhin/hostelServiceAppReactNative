import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import { nextMonth, payMonth } from "../../../Hooks/Conditions";
import { useAuth } from "../../../Authentication/AuthContext";

const PayRent = ({ paid, phone }) => {
  const { data, paySeatRent } = useAuth();
  const rentPayment = () => {
    const value = {
      trxID: "TxrGhKmliZs",
      phone: phone,
    };
    paySeatRent(value);
    paid(1);
    console.log("Payment for seat rent");
  };
  return (
    <View style={styles.box}>
      <Text style={{ fontSize: 12 }}>Bill Month</Text>
      <Text style={{ fontSize: 20.4, fontWeight: 700, color: "#374151" }}>
        {nextMonth}
      </Text>
      <Text style={{ fontSize: 11.6, color: "#EF4444", fontWeight: 500 }}>
        not paid
      </Text>
      <TouchableRipple
        style={{
          marginHorizontal: 24,
          marginVertical: 16,
        }}
        onPress={() => {
          rentPayment();
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
    color: "#fff",
    // boxShadow:
    //   "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
});
export default PayRent;
