import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Constants from "expo-constants";
import HomePage from "./Components/Home/HomePage";
import MainNavBar from "./Components/NavMenu/MainNavBar";
import HistoryPage from "./Components/History/HistoryPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableRipple } from "react-native-paper";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const PrimaryOutletItems = () => {
    switch (selectedTab) {
      case 0:
        return <HomePage />;
      case 1:
        return <HistoryPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    <View style={styles.body}>
      {/* =====================================
              DashBoard Outlet
      ====================================== */}
      <View>{PrimaryOutletItems()}</View>
      {/* =====================================
              DashBoard Common NavBar
      ====================================== */}
      <View style={styles.navBar}>
        <TouchableRipple
          onPress={() => {
            setSelectedTab(0);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text  style={selectedTab ? styles.activeMenu : styles.menu}>
            <MaterialCommunityIcons name="home" size={28} color="#D1D5DB" />
          </Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text  style={selectedTab ? styles.menu : styles.activeMenu}>
            <MaterialCommunityIcons name="history" size={28} color="#D1D5DB" />
          </Text>
        </TouchableRipple>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    position: "relative",
  },
  navBar: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "0.5px",
  },
  menu: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#134e4a",
    padding: "0.6rem",
  },
  activeMenu: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#275754",
    padding: "0.6rem",
  },
});
