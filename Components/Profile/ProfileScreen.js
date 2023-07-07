import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import TopSection from "./TopSection/TopSection";
import LinkSection from "./LinkSection/LinkSection";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.body}>
      <TopSection/>
      <LinkSection/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    position: "relative",
    marginTop:28,
  },
});

export default ProfileScreen;
