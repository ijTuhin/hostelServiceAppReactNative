import { View, Text, StyleSheet } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { coupon } from "../../Hooks/Conditions";

const Coupons = () => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Text
        style={[
          styles.coupon,
          coupon
            ? {
                marginBottom: "15rem",
              }
            : {
                marginBottom: "5rem",
              },
        ]}
      >
        {coupon}
        <Octicons
          style={{ marginTop: "0.25rem" }}
          name="dot-fill"
          size={6}
          color="#ddd"
        />
        <FontAwesome5
          style={{ marginTop: "0.15rem" }}
          name="coins"
          size={18}
          color="#F59E0B"
        />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  coupon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.15rem",
    color: "#ddd",
    fontWeight: 500,
  },
});

export default Coupons;
