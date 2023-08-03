import { View, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Coupons from "../Features/Order/Coupons";
import Meals from "../Features/Order/Meals";
import OrderBtn from "../Features/Order/OrderBtn";
import { useAuth } from "../Authentication/AuthContext";
import { day, meal } from "../Hooks/Conditions";

const PlaceOrderScreen = () => {
  const { data } = useAuth();
  const [coupon, setCoupon] = useState(data.user.coupon);
  const done = data.orders.filter((i) => {
    if (i.date === day && i.meal === meal) return i;
  });
  useEffect(() => {
    console.log("Order Load");
  }, [coupon]);
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
    backgroundColor: "#042f2e",
    display: "flex",
    position: "relative",
  },
});

export default PlaceOrderScreen;
