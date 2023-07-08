import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";
import React, { useState } from "react";
import Orders from "./Orders/Orders";
import Payments from "./Payments/Payments";
import Attendances from "./Attendances/Attendances";
import AllMessages from "./Message/AllMessages";
import Issues from "./Message/Issues";
import Notices from "./Message/Notices";

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
    <ScrollView contentContainerStyle={{marginBottom:24}}>
      {/* =====================================
            History DashBoard NavBar
    ====================================== */}
      <View style={styles.top}>
        {/* <Text style={styles.topText}>Hostel Service</Text> */}
        <View style={styles.navBar}>
          <TouchableRipple
            style={[
              styles.menu,
              selectedTab !== 0
                ? { borderBottomColor: "rgb(241, 245, 249)", borderBottomWidth: 1 }
                : { borderBottomColor: "#134e4a", borderBottomWidth: 3 },
            ]}
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Text>
              <MaterialCommunityIcons name="food" size={32} color="#0f766e" />
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              styles.menu,
              selectedTab !== 1
                ? { borderBottomColor: "rgb(241, 245, 249)", borderBottomWidth: 1 }
                : { borderBottomColor: "#134e4a", borderBottomWidth: 3 },
            ]}
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Text>
              <FontAwesome5 name="money-check-alt" size={28} color="#0f766e" />
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              styles.menu,
              selectedTab !== 2
                ? { borderBottomColor: "rgb(241, 245, 249)", borderBottomWidth: 1 }
                : { borderBottomColor: "#134e4a", borderBottomWidth: 3 },
            ]}
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Text>
              <FontAwesome5 name="clipboard-list" size={28} color="#0f766e" />
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              styles.menu,
              selectedTab !== 3
                ? { borderBottomColor: "rgb(241, 245, 249)", borderBottomWidth: 1 }
                : { borderBottomColor: "#134e4a", borderBottomWidth: 3 },
            ]}
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => {
              setSelectedTab(3);
            }}
          >
            <Text>
              <MaterialCommunityIcons name="email" size={34} color="#0f766e" />
            </Text>
          </TouchableRipple>
        </View>
      </View>
      {/* =====================================
              History DashBoard Outlet
      ====================================== */}
      <View>{HistoryOutletItems()}</View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  navBar: {
    display: "flex",
    flexDirection: "row",
  },
  topText: {
    color: "#fff",
    backgroundColor: "#0f766e",
    fontSize: 28,
    fontWeight: 700,
    fontStyle: "italic",
    paddingHorizontal: 18.4,
    paddingVertical: 12,
  },
  menu: {
    height: 56,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingVertical: 12,
    width: "25%",
  },
});
export default HistoryPage;
