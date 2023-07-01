import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const MainNavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableHighlight>
        <Text style={styles.texts}>
          <MaterialCommunityIcons name="home" size={28} color="#D1D5DB" />
        </Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.texts}>
          <MaterialCommunityIcons name="history" size={28} color="#D1D5DB" />
        </Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  navBar: {
    width: "100vw",
    position: "absolute",
    bottom: 0,
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "0.5px",
  },
  texts: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#134e4a",
    padding: "0.6rem",
  },
});
export default MainNavBar;
