import { View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Coupons from "../Features/Order/Coupons";
import Meals from "../Features/Order/Meals";
import OrderBtn from "../Features/Order/OrderBtn";
import { useAuth } from "../Authentication/AuthContext";
import { day, meal } from "../Hooks/Conditions";

const PlaceOrderScreen = ({ navigation }) => {
  let a = new Date().toLocaleDateString()
  const { data } = useAuth();
  const [coupon, setCoupon] = useState(data.coupon);
  const done = data.orders.filter((i) => {
    // if(i.date === day && i.meal === meal)
    // console.log("filter", i.date, a, i.meal, meal)
    return i.date === day && i.meal === meal;
  });
  console.log(done.length)
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Meals coupon={coupon} />
      <Coupons coupon={coupon} />
      <OrderBtn set={setCoupon} done={done.length} coupon={coupon} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#275754",
    display: "flex",
    position: "relative",
  },
});

export default PlaceOrderScreen;
