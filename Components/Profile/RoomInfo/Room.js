import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Room = () => {
  return (
    <View style={styles.body}>
      <Text style={{ fontSize: "1.15rem" }}>Room no. </Text>
      <Text
        style={{
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#0F766E",
        }}
      >
        401
      </Text>
      <Text style={{}}>Total member: 06</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    paddingVertical: "1.5rem",
    paddingHorizontal: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Room;
