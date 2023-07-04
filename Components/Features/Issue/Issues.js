import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import TaskDone from "../TaskDone";
import IssueBox from "./IssueBox";
import { PaperProvider } from "react-native-paper";

const Issues = () => {
  const [task, setTask] = useState(1);
  return (
    <PaperProvider>
      <View style={styles.body}>
        <View
          style={{
            paddingVertical: "3rem",
            backgroundColor: "skyblue",
            width: "100vw",
          }}
        >
          <Text></Text>
        </View>
        <View
          style={[
            {
              backgroundColor: "#fff",
            },
          ]}
        >
          {task ? <IssueBox /> : <TaskDone text={"Posted Issue"} />}
        </View>
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    position: "relative",
  },
});
export default Issues;
