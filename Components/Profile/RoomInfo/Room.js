import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Room = ({ room, total }) => {
  return (
    <View style={styles.body}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 108,
          height: 108,
          borderWidth: 1,
          borderRadius: 1000,
          borderColor: "#94a3b8",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#cbd5e1",
            textAlignVertical: "center",
            textAlign: "center",
          }}
        >
          {room}
        </Text>
        <Text style={{ color: "#94a3b8", fontSize: 10 }}>
          Total member: {total}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Room;
