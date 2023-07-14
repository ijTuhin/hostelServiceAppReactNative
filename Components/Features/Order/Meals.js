import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { meal } from "../../Hooks/Conditions";

const Meals = ({ coupon }) => {
  let item = meal;
  if (!coupon) item = 0;
  return (
    <View
      style={{
        padding: 40,
      }}
    >
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
  btn: {
    borderRadius: 10,
    marginVertical: 5.6,
    display: "flex",
    textAlign: "center",
    textAlignVertical: "center",
  },
  activeBtn: {
    paddingVertical: 24,
    backgroundColor: "white",
    fontSize: 20,
    marginVertical: 8,
    // boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  },
  notActiveBtn: {
    borderWidth: 1,
    borderColor: "#6B7280",
    marginHorizontal: 16,
    paddingVertical: 16,
    color: "#6B7280",
    fontSize: 18.4,
  },
});

export default Meals;
