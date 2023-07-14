import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Room from "../Profile/RoomInfo/Room";
import Members from "../Profile/RoomInfo/Members";
import { useAuth } from "../Authentication/AuthContext";

const RoomInfoScreen = () => {
  const { data } = useAuth();
  console.log("Room Info", data.name);
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Room item={data.room} />
      <Members item={data.room.member} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 16,
    backgroundColor: "#134e4a",
  },
});
export default RoomInfoScreen;
