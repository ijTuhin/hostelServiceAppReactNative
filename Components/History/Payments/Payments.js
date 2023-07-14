import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import Data from "./Data";

const Payments = ({ item }) => {
  const [data, setData] = useState(item);
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <SafeAreaView
      style={{
        marginBottom: 48,
      }}
    >
      <View style={styles.nav}>
        <TouchableRipple
          style={{ borderRadius: 9999 }}
          onPress={() => {
            setData(item);
            setSelectedTab(0);
          }}
          rippleColor="rgba(0, 0, 0, .02)"
        >
          <Text
            style={[
              styles.menu,
              selectedTab === 0 ? styles.active : styles.notActive,
            ]}
          >
            All
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={{ borderRadius: 9999 }}
          onPress={() => {
            setData(item.filter((i) => i.item === "meal"));
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .02)"
        >
          <Text
            style={[
              styles.menu,
              selectedTab === 1 ? styles.active : styles.notActive,
            ]}
          >
            Meals Only
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={{ borderRadius: 9999 }}
          onPress={() => {
            setData(item.filter((i) => i.item === "rent"));
            setSelectedTab(2);
          }}
          rippleColor="rgba(0, 0, 0, .02)"
        >
          <Text
            style={[
              styles.menu,
              selectedTab === 2 ? styles.active : styles.notActive,
            ]}
          >
            Rent Only
          </Text>
        </TouchableRipple>
      </View>
      <Data data={data} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 16,
  },
  menu: {
    borderRadius: 9999,
    paddingHorizontal: 18.4,
    paddingVertical: 8,
  },
  active: {
    borderWidth: 1,
    borderColor: "rgb(156, 163, 175)",
    color: "#334155",
  },
  notActive: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    color: "#CBD5E1",
  },
});

export default Payments;
