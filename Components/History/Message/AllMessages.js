import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import Notices from "./Notices";
import Issues from "./Issues";

const AllMessages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const OutletItems = () => {
    switch (selectedTab) {
      case 0:
        return <Notices />;
      case 1:
        return <Issues />;
      default:
        return <Notices />;
    }
  };
  return (
    <View style={styles.container}>
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
                fontSize: 24,
              },
              !selectedTab && { color: "#275754" },
            ]}
          >
            Notices
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={[styles.menu, selectedTab ? styles.active : styles.notActive]}
          onPress={() => {
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text style={[{ fontSize: 24 }, selectedTab && { color: "#275754" }]}>
            Complaints
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
  container: {
    flex: 1,
    marginBottom: 80,
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
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
    width: "50%",
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: "#275754",
    fontWeight: 600,
  },
  notActive: {
    border: 0,
  },
});

export default AllMessages;
