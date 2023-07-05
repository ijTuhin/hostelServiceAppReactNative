import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import PaymentBtn from "./PaymentBtn";

const PaymentBox = ({ added, total, coupon, change }) => {
  return (
    <View style={styles.paymentBox}>
      <View style={[styles.packageText]}>
        <Text style={{ fontSize: 16.8 }}>Currently Available Coupons</Text>
        <Text style={{ fontSize: 16.8 }}>
          {coupon}
          <FontAwesome5
            style={{ marginTop: 4 }}
            name="coins"
            size={14}
            color="#6B7280"
          />
        </Text>
      </View>
      <View
        style={[
          styles.packageText,
          {
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
            paddingBottom: 24,
          },
        ]}
      >
        <Text
          style={{ fontWeight: 700, fontSize: 21.6, color: "#374151" }}
        >
          Selected Coupons
        </Text>
        <Text
          style={{ fontWeight: 700, fontSize: 21.6, color: "#374151" }}
        >
          {added}
          <FontAwesome5
            style={{ marginTop: 4 }}
            name="coins"
            size={18}
            color="#6B7280"
          />
        </Text>
      </View>
      <View style={[styles.packageText]}>
        <Text style={{ fontSize: 16.8 }}>Total</Text>
        <Text style={{ fontWeight: 700, fontSize: 21.6 }}>
          {total}
          <FontAwesome5
            style={{ marginTop: 4 }}
            name="coins"
            size={14}
            color="#6B7280"
          />
        </Text>
      </View>
      <PaymentBtn change={change} />
    </View>
  );
};
const styles = StyleSheet.create({
  paymentBox: {
    width: "100vw",
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  packageText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});

export default PaymentBox;
