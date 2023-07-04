import { View, Text, StyleSheet } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const CouponBox = ({coupon}) => {
  return (
    <View style={styles.couponBox}>
        <Text style={styles.coupon}>
          {coupon}
          <Octicons
            style={{ marginTop: "0.25rem" }}
            name="dot-fill"
            size={10}
            color="lightgray"
          />
          <FontAwesome5
            style={{ marginTop: "0.25rem" }}
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
      width: "8rem",
      height: "8rem",
      borderRadius: "100%",
      backgroundColor: "#275754",
      opacity: "0.85",
    },
    coupon: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5rem",
      fontSize: "1.85rem",
      color: "#fff",
      // justifyContent:"center",
    },
  });

export default CouponBox