import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { coupon, meal } from "../../Hooks/Conditions";

const Meals = () => {
  let item = meal;
  if (!coupon) item = 0;
  return (
    <View style={styles.btnBox}>
      <Text
        style={[
          styles.btn,
          item === "Breakfast" ? styles.activeBtn : styles.notActiveBtn,
        ]}
      >
        Breakfast
      </Text>
      <Text
        style={[
          styles.btn,
          item === "Lunch" ? styles.activeBtn : styles.notActiveBtn,
        ]}
      >
        Lunch
      </Text>
      <Text
        style={[
          styles.btn,
          item === "Dinner" ? styles.activeBtn : styles.notActiveBtn,
        ]}
      >
        Dinner
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  btnBox: {
    padding: 40,
    paddingTop: 96,
  },
  btn: {
    borderRadius: 12,
    paddingHorizontal: 40,
    marginVertical: 5.6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeBtn: {
    paddingVertical: 32,
    backgroundColor: "white",
    fontSize: 24,
    marginVertical: 12,
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
  notActiveBtn: {
    borderWidth: 1,
    borderColor: "#6B7280",
    marginHorizontal: 16,
    paddingVertical: 16,
    color: "#6B7280",
    fontSize: 20,
  },
});

export default Meals;
