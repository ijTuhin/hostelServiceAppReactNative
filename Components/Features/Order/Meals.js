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
    padding: "2.5rem",
    paddingTop: "6rem",
  },
  btn: {
    borderRadius: "0.75rem",
    paddingHorizontal: "2.5rem",
    marginVertical: "0.35rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  activeBtn: {
    paddingVertical: "2rem",
    backgroundColor: "white",
    fontSize: "1.5rem",
    marginVertical: "0.75rem",
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
  notActiveBtn: {
    border: "1px solid #6B7280",
    marginHorizontal: "1rem",
    paddingVertical: "1rem",
    color: "#6B7280",
    fontSize: "1.25rem",
  },
});

export default Meals;
