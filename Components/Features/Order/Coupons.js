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
                marginBottom: 240,
              }
            : {
                marginBottom: 80,
              },
        ]}
      >
        {coupon}
        <Octicons
          style={{ marginTop: 4 }}
          name="dot-fill"
          size={6}
          color="#ddd"
        />
        <FontAwesome5
          style={{ marginTop: 2.4 }}
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
    gap: 8,
    fontSize: 18.4,
    color: "#ddd",
    fontWeight: 500,
  },
});

export default Coupons;
