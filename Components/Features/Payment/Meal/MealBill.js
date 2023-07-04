import { View, Text, StyleSheet } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { coupon, currentDayPay, twoDays } from "../../../Hooks/Conditions";
import CouponBox from "./CouponBox";
import { TouchableRipple } from "react-native-paper";
import PaymentBox from "./PaymentBox";
import PaymentDone from "../PaymentDone";

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
        <View style={styles.navBar}>
          {twoDays ? (
            <View style={styles.menuBox}>
              <Text
                style={[
                  styles.menu,
                  selectedTab ? styles.notActive : styles.active,
                  { color: "lightgray" },
                ]}
              >
                <Octicons
                  style={{ marginTop: "0.25rem" }}
                  name="dot-fill"
                  size={10}
                  color="lightgray"
                />
                2 days
              </Text>
              <Text style={{ marginTop: "0.2rem", color: "#EF4444" }}>
                (limit exceeds)
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="#E2E8F0"
              />
            </View>
          ) : (
            <TouchableRipple
              onPress={() => {
                if (!twoDays) setSelectedTab(0);
              }}
              rippleColor="rgba(0, 0, 0, .32)"
            >
              <View style={styles.menuBox}>
                <Text
                  style={[
                    styles.menu,
                    selectedTab !== 0 ? styles.notActive : styles.active,
                  ]}
                >
                  <Octicons
                    style={{ marginTop: "0.25rem" }}
                    name="dot-fill"
                    size={10}
                    color="lightgray"
                  />
                  2 days
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="lightgray"
                />
              </View>
            </TouchableRipple>
          )}
          <TouchableRipple
            onPress={() => {
              setSelectedTab(1);
            }}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <View style={styles.menuBox}>
              <Text
                style={[
                  styles.menu,
                  selectedTab === 1 ? styles.active : styles.notActive,
                ]}
              >
                {" "}
                <Octicons
                  style={{ marginTop: "0.25rem" }}
                  name="dot-fill"
                  size={10}
                  color="lightgray"
                />
                7 days
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
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
            <View style={styles.menuBox}>
              <Text
                style={[
                  styles.menu,
                  selectedTab === 2 ? styles.active : styles.notActive,
                ]}
              >
                {" "}
                <Octicons
                  style={{ marginTop: "0.25rem" }}
                  name="dot-fill"
                  size={10}
                  color="lightgray"
                />
                30 days
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
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
        <PaymentDone />
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
    borderBottomWidth: "1px",
    borderBottomColor: "#ddd",
    padding: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: "1.5rem",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  menuBox: {
    paddingVertical: "0.5rem",
    borderBottomWidth: "0.1px",
    borderBottomColor: "#ddd",
    display: "flex",
    flexDirection: "row",
    // gap: "3.75rem",
    gap: "0.75rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    fontSize: "1.25rem",
    color: "gray",
    display: "flex",
    gap: "0.25rem",
    flexDirection: "row",
    alignItems: "center",
  },
  active: { color: "#0E7490", fontWeight: "600" },
  paymentBox: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "1.5rem",
    alignItems: "center",
    marginTop: "0.5rem",
    backgroundColor: "#fff",
  },
});

export default MealBill;
