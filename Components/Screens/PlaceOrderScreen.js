import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Coupons from "../Features/Order/Coupons";
import Meals from "../Features/Order/Meals";
import OrderBtn from "../Features/Order/OrderBtn";
import { useAuth } from "../Authentication/AuthContext";

const PlaceOrderScreen = ({ navigation }) => {
  const { data } = useAuth();
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Meals coupon={data.coupon} />
      <Coupons coupon={data.coupon} />
      <OrderBtn coupon={data.coupon} />
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
