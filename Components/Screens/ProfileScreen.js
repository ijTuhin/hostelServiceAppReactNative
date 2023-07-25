import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import TopSection from "../Profile/TopSection/TopSection";
import LinkSection from "../Profile/LinkSection/LinkSection";

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <TopSection navigation={navigation}/>
      <LinkSection navigation={navigation}/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#0f172a",
    display: "flex",
    position: "relative",
  },
});

export default ProfileScreen;
