import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { nextMonth } from "../../../Hooks/Conditions";
import PayRent from "./PayRent";
import TaskDone from "../../TaskDone";
import { useAuth } from "../../../Authentication/AuthContext";

const SeatRent = () => {
  const { data } = useAuth();
  const currentMonthPay = data.payments.filter((i) => {
    if(i.month === nextMonth)
    return i;
  });
  const [payment, setPayment] = useState(currentMonthPay.length);
  return (
    <View
      style={{
        padding: 32,
        backgroundColor: "#fff",
      }}
    >
      {payment ? (
        <TaskDone text={"Payment Done"} />
      ) : (
        <PayRent paid={setPayment} phone={data.user.phone} />
      )}
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
