import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import TaskDone from "../TaskDone";

const Issues = () => {
  const [task, setTask] = useState(0);
  return (
    <View
      style={[{
        padding: "2rem",
        backgroundColor: "#fff",
      }, styles.body]}
    >
      {task ? <></> : <TaskDone text={"Posted Issue"} />}
    </View>
  );
};
const styles = StyleSheet.create({
    body: {
      flex: 1,
      display: "flex",
      position: "relative",
    }})
export default Issues;
