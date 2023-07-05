import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Room = () => {
  return (
    <View style={styles.body}>
      <Text style={{ fontSize: 18.4 }}>Room no. </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 700,
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
    paddingVertical: 24,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Room;
