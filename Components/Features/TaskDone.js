import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

const TaskDone = ({text}) => {
  return (
    <View style={styles.box}>
      <Text
        style={{ fontSize: 28, fontWeight: 600, color: "#475569" }}
      >
        {text}
      </Text>
      <AntDesign name="checkcircleo" size={52} color="#0891B2" />
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
    gap: 24,
    alignItems: "center",
  },
});

export default TaskDone;
