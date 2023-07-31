import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import TaskDone from "../Features/TaskDone";
import IssueBox from "../Features/Issue/IssueBox";
import { PaperProvider } from "react-native-paper";

const IssuesScreen = () => {
  const [task, setTask] = useState(1);
  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor:"#cbd5e1" }}>
      <PaperProvider>
        <View
          style={{
            paddingVertical: 28,
            backgroundColor: "#115e59",
            opacity: 0.75,
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
      </PaperProvider>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    position: "relative",
  },
});
export default IssuesScreen;
