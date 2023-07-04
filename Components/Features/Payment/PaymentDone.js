import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const PaymentDone = () => {
  return (
    <View style={styles.box}>
      <Text
        style={{ fontSize: "1.75rem", fontWeight: "600", color: "#475569" }}
      >
        Payment Done
      </Text>
      <AntDesign name="checkcircleo" size={52} color="#0891B2" />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    alignItems: "center",
  },
});

export default PaymentDone;
