import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MealBill from "./Meal/MealBill";
import SeatRent from "./Seat/SeatRent";
import { TouchableRipple } from "react-native-paper";

const MakePayment = () => {
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
    <View style={styles.body}>
      {/* =====================================
                  NavBar
  ====================================== */}
      <View style={styles.navBar}>
        <TouchableRipple
          onPress={() => {
            setSelectedTab(0);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text
            style={[
              styles.menu,
              selectedTab ? styles.notActive : styles.active,
            ]}
          >
            Meal Package
          </Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text
            style={[
              styles.menu,
              selectedTab ? styles.active : styles.notActive,
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
    </View>
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
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "white",
    // display: "grid",
    // gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    // gap: 0.5,
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap"
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    padding: 16,
    fontSize: 20,
    width:"50vw"
  },
  active: {
    borderBottomWidth: 3.5,
    borderBottomColor: "#275754",
    color: "#275754",
    fontWeight: 600,
  },
  notActive: {
    border: "0px solid #CBD5E1",
  },
});

export default MakePayment;
