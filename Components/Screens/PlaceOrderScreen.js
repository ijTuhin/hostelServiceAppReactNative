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
  const [coupon, setCoupon] = useState(data.user.coupon);
  const done = data.orders.filter((i) => {
    if(i.date === day && i.meal === meal)
    return i;
  });
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
