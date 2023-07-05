import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Room from "./Room";
import Members from "./Members";

const RoomInfo = () => {
  return (
    <View style={styles.body}>
      <Room />
      <Members />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding:"1rem"
  },
});
export default RoomInfo;
