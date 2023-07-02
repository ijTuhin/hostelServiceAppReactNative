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
          onPress={() => {
            setSelectedTab(0);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text style={[styles.menu, selectedTab ? styles.notActive : styles.active]}>
            Notices
          </Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text style={[styles.menu, selectedTab ? styles.active : styles.notActive]}>
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
    marginBottom: "5rem",
  },
  box: {
    marginHorizontal: "1rem",
    marginTop: "0.5rem",
    padding: "1rem",
  },
  navBar: {
    position: "sticky",
    top:"0px",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "0.5px",
    zIndex: "1000",
    backgroundColor: "white"
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
    fontSize:"1.25rem",
  },
  active: {
    borderBottomWidth: "3px",
    borderBottomColor: "#275754",
    color: "#275754",
    fontWeight: 600
  },
  notActive:{
    border: "0px solid #CBD5E1"
  }
});

export default AllMessages;
