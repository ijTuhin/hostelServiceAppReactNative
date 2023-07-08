import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Room from "./Room";
import Members from "./Members";

const RoomInfo = () => {
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
    backgroundColor:"rgb(13, 148, 136)"
  },
});
export default RoomInfo;
