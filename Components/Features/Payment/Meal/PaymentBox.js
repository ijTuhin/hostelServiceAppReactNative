import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import PaymentBtn from "./PaymentBtn";

const PaymentBox = ({ added, total, coupon, change, phone }) => {
  return (
    <View style={styles.paymentBox}>
      <View style={[styles.packageText]}>
        <Text style={{ fontSize: 14.4 }}>Currently Available Coupons</Text>
        <Text style={{ fontSize: 14.4 }}>
          {coupon}
          <FontAwesome5
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
            borderBottomColor: "rgb(226, 232, 240)",
            paddingBottom: 12,
          },
        ]}
      >
        <Text
          style={{ fontWeight: 700, fontSize: 16, color: "#374151" }}
        >
          Selected Coupons
        </Text>
        <Text
          style={{ fontWeight: 700, fontSize: 16, color: "#374151" }}
        >
          {added}
          <FontAwesome5
            name="coins"
            size={14}
            color="#6B7280"
          />
        </Text>
      </View>
      <View style={[styles.packageText]}>
        <Text style={{ fontSize: 14.4 }}>Total</Text>
        <Text style={{ fontWeight: 700, fontSize: 14.4 }}>
          {total}
          <FontAwesome5
            name="coins"
            size={14}
            color="#6B7280"
          />
        </Text>
      </View>
      <PaymentBtn item={added} phone={phone} change={change} />
    </View>
  );
};
const styles = StyleSheet.create({
  paymentBox: {
    width: "100%",
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
