import React, { useState } from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./HomePage";
import MealOrderPage from "./MealOrderPage";
import PaymentPage from "./PaymentPage";
import AttendancePage from "./AttendancePage";
import {
  Divider,
  IconButton,
  List,
  Menu,
  PaperProvider,
} from "react-native-paper";

export const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const returner = () => {
    switch (selectedTab) {
      case 0:
        return <HomePage />;
      case 1:
        return <MealOrderPage />;
      case 2:
        return <PaymentPage />;
      default:
        return <AttendancePage />;
    }
  };
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.tabs}>
          <IconButton
            icon="home"
            size={26}
            onPress={() => {
              setSelectedTab(0);
            }}
          />
          <IconButton
            icon="food"
            size={26}
            onPress={() => {
              setSelectedTab(1);
            }}
          />
          <IconButton
            icon="cart"
            size={26}
            onPress={() => {
              setSelectedTab(2);
            }}
          />
          <IconButton
            icon="account-group"
            size={26}
            onPress={() => {
              setSelectedTab(3);
            }}
          />
          <Menu
            style={{ color: "white" }}
            visible={visible}
            onDismiss={closeMenu}
            anchor={<IconButton icon="menu" size={26} onPress={openMenu} />}
          >
            <Menu.Item
              onPress={() => {
                setSelectedTab(0);
                setVisible(false);
              }}
              title="Your Profile"
            />
            <List.Accordion
              title="Records"
              right={(props) => <List.Icon {...props} />}
            >
              <List.Item
                title="Attendance"
                onPress={() => {
                  setSelectedTab(3);
                  setVisible(false);
                }}
              />
              <List.Item
                title="Meal orders"
                onPress={() => {
                  setSelectedTab(1);
                  setVisible(false);
                }}
              />
              <List.Item
                title="Payments"
                onPress={() => {
                  setSelectedTab(2);
                  setVisible(false);
                }}
              />
            </List.Accordion>
            <Divider />
            <Menu.Item onPress={() => {}} title="Log Out" />
          </Menu>
        </View>
        <View style={{ flex: 1 }}>{returner()}</View>
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 0,
    color: "#ffffff",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
