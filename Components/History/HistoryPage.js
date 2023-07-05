import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";
import React, { useState } from "react";
import Orders from "./Orders/Orders";
import Payments from "./Payments/Payments";
import Attendances from "./Attendances/Attendances";
import AllMessages from "./Message/AllMessages";

const HistoryPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const HistoryOutletItems = () => {
    switch (selectedTab) {
      case 0:
        return <Orders />;
      case 1:
        return <Payments />;
      case 2:
        return <Attendances />;
      case 3:
        return <AllMessages />;
      default:
        return <Orders />;
    }
  };
  return (
    <View>
      {/* =====================================
            History DashBoard NavBar
    ====================================== */}
      <View style={styles.top}>
        <Text style={styles.topText}>Hostel Service</Text>
        <View style={styles.navBar}>
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Text style={selectedTab !== 0 ? styles.menu : styles.activeMenu}>
              <MaterialCommunityIcons name="food" size={32} color="#0f766e" />
            </Text>
          </TouchableRipple>
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Text style={selectedTab !== 1 ? styles.menu : styles.activeMenu}>
              <FontAwesome5 name="money-check-alt" size={28} color="#0f766e" />
            </Text>
          </TouchableRipple>
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Text style={selectedTab !== 2 ? styles.menu : styles.activeMenu}>
              <FontAwesome5 name="clipboard-list" size={28} color="#0f766e" />
            </Text>
          </TouchableRipple>
          <TouchableRipple
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(3);
            }}
          >
            <Text style={selectedTab !== 3 ? styles.menu : styles.activeMenu}>
              <MaterialCommunityIcons name="email" size={34} color="#0f766e" />
            </Text>
          </TouchableRipple>
        </View>
      </View>
      {/* =====================================
              History DashBoard Outlet
      ====================================== */}
      <View>{HistoryOutletItems()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  navBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  topText: {
    color: "#0f766e",
    fontSize: 28,
    fontWeight: 700,
    fontStyle: "italic",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  menu: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 8,
  },
  activeMenu: {
    height: 40,
    borderBottomWidth: 3,
    borderBottomColor: "#134e4a",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 8,
  },
});
export default HistoryPage;
