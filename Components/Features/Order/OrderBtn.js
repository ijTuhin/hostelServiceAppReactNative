import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import { coupon } from "../../Hooks/Conditions";

const OrderBtn = () => {
  const [tap, setTap] = useState(false);
  return (
    <View style={[styles.bottom]}>
      {coupon ? (
        <TouchableRipple
          style={[styles.tap, tap && styles.tapRing]}
          onLongPress={() => {
            setTap(true);
          }}
          rippleColor="rgba(13 ,148, 136, .32)"
        >
          <Text
            style={[
              { fontSize: "1.25rem", color: "#ddd" },
              tap && {
                fontWeight: "600",
              },
            ]}
          >
            {tap ? "Order Placed" : "Tap to continue"}
          </Text>
        </TouchableRipple>
      ) : (
        <Text style={{ color: "#ddd", fontSize: "0.85rem" }}>
          Please clear you payment. Thank you!
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    bottom: "1.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100vw",
  },
  tap: {
    border: "1px solid #ddd",
    borderRadius: "100%",
    width: "12rem",
    height: "12rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tapRing: {
    border: "3px solid #ddd",
  },
});

export default OrderBtn;
