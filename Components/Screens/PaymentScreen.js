import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MealBill from "../Features/Payment/Meal/MealBill";
import SeatRent from "../Features/Payment/Seat/SeatRent";
import { TouchableRipple } from "react-native-paper";

const PaymentScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const OutletItems = () => {
    switch (selectedTab) {
      case 0:
        return <MealBill />;
      case 1:
        return <SeatRent />;
      default:
        return <MealBill />;
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.body}>
      {/* =====================================
                  NavBar
  ====================================== */}
      <View style={styles.navBar}>
        <TouchableRipple
          style={[styles.menu, selectedTab ? styles.notActive : styles.active]}
          onPress={() => {
            setSelectedTab(0);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text
            style={[
              {
                fontSize: 18.4,
              },
              !selectedTab && {
                color: "#275754",
                fontWeight: 600,
              },
            ]}
          >
            Meal Package
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={[styles.menu, selectedTab ? styles.active : styles.notActive]}
          onPress={() => {
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text
            style={[
              { fontSize: 18.4 },
              selectedTab && {
                color: "#275754",
                fontWeight: 600,
              },
            ]}
          >
            Seat Rent
          </Text>
        </TouchableRipple>
      </View>
      {/* =====================================
                  Outlet
    ====================================== */}
      <View>{OutletItems()}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    display: "flex",
    position: "relative",
  },
  box: {
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
  },
  navBar: {
    // position: "sticky",
    // top: 0,
    // zIndex: 1000,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    padding: 16,
    width: "50%",
  },
  active: {
    borderBottomWidth: 3.5,
    borderBottomColor: "#275754",
  },
  notActive: {
    border: 0,
  },
});

export default PaymentScreen;
