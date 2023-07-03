import { View, Text, StyleSheet } from "react-native";
import { Octicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import PaymentBtn from "./PaymentBtn";

const PaymentBox = ({added, total, coupon}) => {
  return (
    <View style={styles.paymentBox}>
      <View style={[styles.packageText]}>
        <Text style={{ fontSize: "1.05rem" }}>Currently Available Coupons</Text>
        <Text style={{ fontSize: "1.05rem" }}>
          {coupon}{" "}
          <FontAwesome5
            style={{ marginTop: "0.25rem" }}
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
            borderBottomWidth: "1px",
            borderBottomColor: "#ddd",
            paddingBottom: "1.5rem",
          },
        ]}
      >
        <Text
          style={{ fontWeight: "700", fontSize: "1.35rem", color: "#374151" }}
        >
          Selected Coupons
        </Text>
        <Text
          style={{ fontWeight: "700", fontSize: "1.35rem", color: "#374151" }}
        >
          {added}{" "}
          <FontAwesome5
            style={{ marginTop: "0.25rem" }}
            name="coins"
            size={18}
            color="#6B7280"
          />
        </Text>
      </View>
      <View style={[styles.packageText]}>
        <Text style={{ fontSize: "1.05rem" }}>Total</Text>
        <Text style={{ fontWeight: "700", fontSize: "1.35rem" }}>
          {total}{" "}
          <FontAwesome5
            style={{ marginTop: "0.25rem" }}
            name="coins"
            size={14}
            color="#6B7280"
          />
        </Text>
      </View>
      <PaymentBtn added={added}/>
    </View>
  );
};
const styles = StyleSheet.create({
  paymentBox: {
    backgroundColor: "#fff",
    paddingVertical: "2rem",
    paddingHorizontal: "1.5rem",
  },
  packageText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
});

export default PaymentBox;
