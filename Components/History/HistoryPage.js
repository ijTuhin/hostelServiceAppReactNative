import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";
import React, { useState } from "react";
import Header from "./Header";
import Orders from "./Orders/Orders";
import Payments from "./Payments/Payments";
import Attendances from "./Attendances";
import Issues from "./Issues";

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
        return <Issues />;
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
  top: {
    /* borderBottomWidth: "1px",
    borderBottomColor: "#134e4a", */
  },
  navBar: {
    /* display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: "1.25rem",
    paddingVertical: "0.75rem",
    borderTopWidth: "1px",
    borderTopColor: "#134e4a", */
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  topText: {
    color: "#0f766e",
    fontSize: "1.75rem",
    fontWeight: 700,
    // fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontStyle: "italic",
    paddingHorizontal: "0.75rem",
    paddingVertical: "0.75rem",
  },
  menu: {
    height: "2.5rem",
    borderBottomWidth: "1px",
    borderBottomColor: "#dddddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: "0.5rem",
  },
  activeMenu: {
    height: "2.5rem",
    borderBottomWidth: "3px",
    borderBottomColor: "#134e4a",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: "0.5rem",
  },
});
export default HistoryPage;
