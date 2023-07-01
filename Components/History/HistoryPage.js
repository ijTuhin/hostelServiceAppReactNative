import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import Header from "./Header";
import Orders from "./Orders";
import Payments from "./Payments";
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
          <TouchableHighlight>
            <Text
              onPress={() => {
                setSelectedTab(0);
              }}
            >
              <MaterialCommunityIcons name="food" size={32} color="#0f766e" />
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text
              onPress={() => {
                setSelectedTab(1);
              }}
            >
              <FontAwesome5 name="money-check-alt" size={28} color="#0f766e" />
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text
              onPress={() => {
                setSelectedTab(2);
              }}
            >
              <FontAwesome5 name="clipboard-list" size={28} color="#0f766e" />
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text
              onPress={() => {
                setSelectedTab(3);
              }}
            >
              <MaterialCommunityIcons name="email" size={34} color="#0f766e" />
            </Text>
          </TouchableHighlight>
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
    borderBottomWidth: "1px",
    borderBottomColor: "#134e4a",
    marginBottom: 10,
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: "1.25rem",
    paddingVertical: "0.75rem",
    borderTopWidth: "1px",
    borderTopColor: "#134e4a",
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
  menu: {},
});
export default HistoryPage;
