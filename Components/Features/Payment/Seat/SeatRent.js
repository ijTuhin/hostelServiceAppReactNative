import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { currentMonthPay } from "../../../Hooks/Conditions";
import PayRent from "./PayRent";
import TaskDone from "../../TaskDone";

const SeatRent = () => {
  const [payment, setPayment] = useState(currentMonthPay);
  return (
    <View
      style={{
        padding: 32,
        backgroundColor: "#fff",
      }}
    >
      {payment ? <TaskDone text={"Payment Done"} /> : <PayRent paid={setPayment} />}
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    padding: 32,
    backgroundColor: "#fff",
  },
});
export default SeatRent;
