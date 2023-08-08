import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import Data from "./Data";
import { useAuth } from "../../Authentication/AuthContext";

const Payments = () => {
  const { data } = useAuth();
  // const value = data.orders
  const [value, setValue] = useState(data.payments);
  console.log(data.payments);
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
            setValue(data.payments);
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
            setValue(data.payments.filter((i) => i.item === "meal"));
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
            setValue(data.payments.filter((i) => i.item === "rent"));
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
      <Data data={value} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 16,
    backgroundColor:"#334155",
    marginBottom:4
  },
  menu: {
    borderRadius: 9999,
    paddingHorizontal: 18.4,
    paddingVertical: 8,
  },
  active: {
    borderWidth: 1,
    borderColor: "white",
    color: "#334155",
    backgroundColor:"white"
  },
  notActive: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    color: "#d1d5db",
  },
});

export default Payments;
