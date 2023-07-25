import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const TaskDone = ({text}) => {
  return (
    <View style={styles.box}>
      <Text
        style={{ fontSize: 24, fontWeight: 600, color: "#cbd5e1" }}
      >
        {text}
      </Text>
      <AntDesign name="checkcircleo" size={44} color="#0891B2" />
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    padding: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    alignItems: "center",
    backgroundColor:"#0f172a",
    height:"100%"
  },
});

export default TaskDone;
