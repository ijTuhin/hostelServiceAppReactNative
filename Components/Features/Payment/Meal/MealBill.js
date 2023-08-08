import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { month, today } from "../../../Hooks/Conditions";
import CouponBox from "./CouponBox";
import { TouchableRipple } from "react-native-paper";
import PaymentBox from "./PaymentBox";
import TaskDone from "../../TaskDone";
import { useAuth } from "../../../Authentication/AuthContext";

const MealBill = () => {
  const { data } = useAuth();
  const currentDayPay = data.payments.filter((i) => {
    if (i.date === today) return i;
  });
  const twoDays = data.payments.filter((i) => {
    if (i.package === 2 && i.month === month) return i;
  });
  let newCoupon;
  let total;
  const [selectedTab, setSelectedTab] = useState(null);
  const [paymentTab, setPaymentTab] = useState(currentDayPay.length);
  const getCoupons = () => {
    switch (selectedTab) {
      case 0:
        return [(newCoupon = 3 * 2), (total = data.user.coupon + newCoupon)];
      case 1:
        return [(newCoupon = 3 * 7), (total = data.user.coupon + newCoupon)];
      case 2:
        return [(newCoupon = 3 * 30), (total = data.user.coupon + newCoupon)];
      default:
        return [(newCoupon = 3 * 0), (total = data.user.coupon + newCoupon)];
    }
  };
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "#F1F5F9", marginHorizontal:20 }}>
      <View style={styles.packageBox}>
        {!paymentTab ? (
          <CouponBox coupon={data.user.coupon} />
        ) : (
          <CouponBox coupon={getCoupons()[1]} />
        )}
        {/* =============================================== 
                Packages
=============================================== */}
        <View style={{ width: 160, marginTop: 4 }}>
          <TouchableRipple
            onPress={() => {
              if (twoDays.length < 3) setSelectedTab(0);
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
                {twoDays.length >= 3 && (
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
        paymentTab === 2 && <TaskDone text={"Payment Done"} />
      ) : (
        <>
          {selectedTab !== null && (
            <View style={styles.paymentBox}>
              <PaymentBox
                coupon={data.user.coupon}
                change={setPaymentTab}
                total={getCoupons()[1]}
                added={getCoupons()[0]}
              />
              <Text onPress={() => setSelectedTab(null)}>Cancel</Text>
            </View>
          )}
        </>
      )}
    </ScrollView>
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
