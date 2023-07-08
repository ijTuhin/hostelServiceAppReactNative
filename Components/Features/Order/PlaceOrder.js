import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Coupons from "./Coupons";
import Meals from "./Meals";
import OrderBtn from "./OrderBtn";

const PlaceOrder = () => {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Meals />
      <Coupons />
      <OrderBtn />
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

export default PlaceOrder;
