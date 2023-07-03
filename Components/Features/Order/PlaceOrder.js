import { View, StyleSheet } from "react-native";
import React from "react";
import Coupons from "./Coupons";
import Meals from "./Meals";
import OrderBtn from "./OrderBtn";

const PlaceOrder = () => {
  return (
    <View style={styles.body}>
      <Meals />
      <Coupons />
      <OrderBtn />
    </View>
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
