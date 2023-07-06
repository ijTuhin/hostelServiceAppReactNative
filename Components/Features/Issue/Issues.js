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
            paddingVertical: 48,
            backgroundColor: "skyblue",
            width: "100%",
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