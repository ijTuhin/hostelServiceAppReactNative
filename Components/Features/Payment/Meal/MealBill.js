import { View, Text, StyleSheet } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { coupon, currentDayPay, twoDays } from "../../../Hooks/Conditions";
import CouponBox from "./CouponBox";
import { TouchableRipple } from "react-native-paper";
import PaymentBox from "./PaymentBox";
import TaskDone from "../../TaskDone";

const MealBill = () => {
  let newCoupon;
  let total;
  const [selectedTab, setSelectedTab] = useState(null);
  const [paymentTab, setPaymentTab] = useState(currentDayPay);
  const getCoupons = () => {
    switch (selectedTab) {
      case 0:
        return [(newCoupon = 2), (total = coupon + newCoupon)];
      case 1:
        return [(newCoupon = 7), (total = coupon + newCoupon)];
      case 2:
        return [(newCoupon = 30), (total = coupon + newCoupon)];
      default:
        return [(newCoupon = 0), (total = coupon + newCoupon)];
    }
  };
  return (
    <View style={{ backgroundColor: "#F1F5F9" }}>
      <View style={styles.packageBox}>
        {!paymentTab ? (
          <CouponBox coupon={coupon} />
        ) : (
          <CouponBox coupon={getCoupons()[1]} />
        )}
        {/* =============================================== 
                Packages
=============================================== */}
        <View style={{ width: 160, marginTop: 4 }}>
          <TouchableRipple
            onPress={() => {
              setSelectedTab(0);
            }}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <View
              style={[
                {
                  borderBottomWidth: 1,
                },
                styles.menuBox,
              ]}
            >
              <Text style={[styles.menu, selectedTab === 0 && styles.active]}>
                {" "}
                2 days
                {twoDays !== 0 && (
                  <Text
                    style={{
                      marginBottom: 16,
                      color: "#EF4444",
                      fontSize: 12,
                      fontWeight: 400,
                    }}
                  >
                    (limit exceeds)
                  </Text>
                )}
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="lightgray"
              />
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              setSelectedTab(1);
            }}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <View
              style={[
                {
                  borderBottomWidth: 1,
                },
                styles.menuBox,
              ]}
            >
              <Text
                style={[
                  styles.menu,
                  selectedTab === 1 ? styles.active : styles.notActive,
                ]}
              >
                {" "}
                7 days
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="lightgray"
              />
            </View>
          </TouchableRipple>
          <TouchableRipple
            onPress={() => {
              setSelectedTab(2);
            }}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <View
              style={[
                {
                  borderBottomWidth: 0,
                },
                styles.menuBox,
              ]}
            >
              <Text
                style={[
                  styles.menu,
                  selectedTab === 2 ? styles.active : styles.notActive,
                ]}
              >
                {" "}
                30 days
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="lightgray"
              />
            </View>
          </TouchableRipple>
        </View>
      </View>
      {/* =============================================== 
                Payment Section
=============================================== */}
      {paymentTab ? (
        <TaskDone text={"Payment Done"} />
      ) : (
        <>
          {selectedTab !== null && (
            <View style={styles.paymentBox}>
              <PaymentBox
                coupon={coupon}
                change={setPaymentTab}
                total={getCoupons()[1]}
                added={getCoupons()[0]}
              />
              <Text onPress={() => setSelectedTab(null)}>Cancel</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  packageBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 24,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  menuBox: {
    paddingVertical: 9.6,
    borderBottomColor: "rgb(241, 245, 249)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    fontSize: 16,
    color: "gray",
  },
  active: { color: "#0E7490", fontWeight: 600 },
  paymentBox: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: 24,
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#fff",
  },
});

export default MealBill;
