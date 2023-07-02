import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableRipple } from "react-native-paper";
import Data from "./Data";

const Payments = () => {
  const [url, setUrl] = useState(`http://localhost:3001/payment/`);
  const [data, setData] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((item) => {
        setData(item);
        console.log(item);
      })
      .catch((error) => console.error(error));
  }, [url]);
  return (
    <SafeAreaView
      style={{
        marginBottom: "5rem",
      }}
    >
      <View style={styles.nav}>
        <TouchableRipple style={{borderRadius: "9999px"}}
          onPress={() => {
            setUrl(`http://localhost:3001/payment/`)
            setSelectedTab(0);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
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
        <TouchableRipple style={{borderRadius: "9999px"}}
          onPress={() => {
            setUrl(`http://localhost:3001/payment/meal`)
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
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
        <TouchableRipple style={{borderRadius: "9999px"}}
          onPress={() => {
            setUrl(`http://localhost:3001/payment/rent`)
            setSelectedTab(2);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
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
    marginTop: "1rem",
  },
  menu: {
    borderRadius: "9999px",
    paddingHorizontal: "1.15rem",
    paddingVertical: "0.5rem",
  },
  active: {
    border: "1px solid #334155",
    color: "#334155"
  },
  notActive: {
    border: "1px solid #CBD5E1",
    color: "#CBD5E1"
  },
});

export default Payments;