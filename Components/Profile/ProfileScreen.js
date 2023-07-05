import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TopSection from "./TopSection/TopSection";
import LinkSection from "./LinkSection/LinkSection";

const ProfileScreen = () => {
  return (
    <View style={styles.body}>
      <TopSection/>
      <LinkSection/>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    position: "relative",
  },
});

export default ProfileScreen;
