import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import { coupon, meal } from "../../Hooks/Conditions";

const OrderBtn = () => {
  const [tap, setTap] = useState(false);
  return (
    <View style={[styles.bottom]}>
      {coupon ? (
        meal ? (
          <TouchableRipple
            style={[styles.tap, tap && styles.tapRing]}
            onLongPress={() => {
              setTap(true);
            }}
            rippleColor="rgba(13 ,148, 136, .32)"
          >
            <Text
              style={[
                { fontSize: 20, color: "#ddd" },
                tap && {
                  fontWeight: 600,
                },
              ]}
            >
              {tap ? "Order Placed" : "Tap to continue"}
            </Text>
          </TouchableRipple>
        ) : (
          <Text style={{ color: "#ddd", fontSize: 13.6 }}>
            It is not meal order time. Thank You!
          </Text>
        )
      ) : (
        <Text style={{ color: "#ddd", fontSize: 13.6 }}>
          Please clear you payment. Thank you!
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    bottom: 28,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  tap: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: "100%",
    width: 192,
    height: 192,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tapRing: {
    borderWidth: 3,
    borderColor: "#ddd",
  },
});

export default OrderBtn;
