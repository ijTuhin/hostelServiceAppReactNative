import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Room from "../Profile/RoomInfo/Room";
import Members from "../Profile/RoomInfo/Members";

const RoomInfoScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Room />
      <Members />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal:28,
    paddingVertical:16,
    backgroundColor:"#134e4a",
  },
});
export default RoomInfoScreen;
