import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import { day, meal } from "../../Hooks/Conditions";
import { useAuth } from "../../Authentication/AuthContext";

const OrderBtn = ({ coupon, set, done }) => {
  const { placeMealOrder } = useAuth();
  const [tap, setTap] = useState(false);
  const placeOrder = () => {
    placeMealOrder(meal);
    setTap(true);
    set(coupon - 1);
  };
  return (
    <View style={[styles.bottom]}>
      {coupon ? (
        done ? (
          <Text style={{ color: "#ddd", fontSize: 13.6 }}>Order Placed.</Text>
        ) : meal ? (
          <TouchableRipple
            style={[styles.tap, tap && styles.tapRing]}
            onLongPress={() => {
              placeOrder();
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
              {tap ? "Order Placed" : `Tap to continue ${meal}`}
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
    borderRadius: 1000,
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
