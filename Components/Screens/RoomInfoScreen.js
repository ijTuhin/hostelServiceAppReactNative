import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import Room from "../Profile/RoomInfo/Room";
import Members from "../Profile/RoomInfo/Members";
import { useAuth } from "../Authentication/AuthContext";

const RoomInfoScreen = () => {
  const { data } = useAuth();
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Room room={data?.room?.room} total={data?.room?.member?.length} />
      <Members item={data?.room?.member} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 28,
    paddingVertical: 16,
    backgroundColor: "#020617",
  },
});
export default RoomInfoScreen;
