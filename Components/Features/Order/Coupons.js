import { View, Text, StyleSheet } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { coupon } from "../../Hooks/Conditions";

const Coupons = () => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <View
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
        <Text
          style={{
            fontSize: 18.4,
            color: "#ddd",
            fontWeight: 500,
          }}
        >
          {coupon}
        </Text>
        <Octicons
          name="dot-fill"
          size={4}
          color="#ddd"
        />
        <FontAwesome5
          name="coins"
          size={16}
          color="#F59E0B"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  coupon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6.4,
  },
});

export default Coupons;
