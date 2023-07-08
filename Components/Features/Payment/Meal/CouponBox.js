import { View, Text, StyleSheet } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const CouponBox = ({coupon}) => {
  return (
    <View style={styles.couponBox}>
        <Text style={styles.coupon}>
          {coupon}
          <Octicons
            style={{ marginTop: 4 }}
            name="dot-fill"
            size={10}
            color="lightgray"
          />
          <FontAwesome5
            style={{ marginTop: 4 }}
            name="coins"
            size={24}
            color="#F59E0B"
          />
        </Text>
        <Text style={{color:"#ddd"}}>Remaining</Text>
      </View>
  )
}
const styles = StyleSheet.create({
    couponBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 500,
      width: 128,
      height: 128,
      borderRadius: 1000,
      backgroundColor: "#275754",
      opacity: 0.85,
    },
    coupon: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      fontSize: 29.6,
      color: "#fff"
    },
  });

export default CouponBox