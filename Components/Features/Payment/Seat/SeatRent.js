import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import PaymentDone from "../PaymentDone";
import { currentMonthPay } from "../../../Hooks/Conditions";
import PayRent from "./PayRent";

const SeatRent = () => {
  const [payment, setPayment] = useState(currentMonthPay);
  return (
    <View
      style={{
        padding: "2rem",
        backgroundColor: "#fff",
      }}
    >
      {payment ? <PaymentDone /> : <PayRent paid={setPayment} />}
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    padding: "2rem",
    backgroundColor: "#fff",
  },
});
export default SeatRent;
