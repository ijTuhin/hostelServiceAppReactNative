import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { issues } from "../../Hooks/PassData";
import { Card, TouchableRipple } from "react-native-paper";
import PostBoxModal from "./PostBoxModal";

const IssueBox = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.container}>
      <Card
        style={{
          marginVertical: 4,
          backgroundColor: "#e2e8f0",
          marginHorizontal: 16,
          borderRadius: 4,
        }}
      >
        <View style={styles.box}>
          <Text style={styles.topIcon}>
            <FontAwesome5 name="box-open" size={30} color="#fff" />
          </Text>
          <View style={styles.issues}>
            <PostBoxModal
              visible={visible}
              setVisible={setVisible}
              hideModal={hideModal}
              data={data}
              set={setData}
            />
            {issues.map((i, index) => (
              <Card
                key={index}
                style={{
                  backgroundColor: "#fff",
                  paddingVertical: 32,
                  paddingHorizontal: 8,
                  borderRadius: 4,
                  margin: 8,
                  width: 160,
                }}
              >
                <TouchableRipple
                  onPress={() => {
                    setData({
                      topic: i.topic,
                      to: i.to,
                      no: i.no,
                    });
                    setVisible(true);
                  }}
                  // rippleColor="rgba(0, 0, 0, .32)"
                  key={index}
                  style={styles.issue}
                >
                  <>
                    {i.icon}
                    <Text style={styles.topic}>{i.topic}</Text>
                  </>
                </TouchableRipple>
              </Card>
            ))}
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    top: -30,
    // backgroundColor:"#0f172a"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 16,
    backgroundColor: "#e2e8f0",
    marginBottom: 16,
  },
  topIcon: {
    borderRadius: 1000,
    width: 72,
    height: 72,
    textAlign: "center",
    textAlignVertical: "center",
    position: "absolute",
    top: -40,
    backgroundColor: "#164e63",
  },
  issues: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 32,
    width: "100%",
    justifyContent: "center",
  },
  issue: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    // boxShadow:
    //   "0 4px 6px -1px rgb(13 148 136 / 0.1), 0 2px 4px -2px rgb(13 148 136 / 0.1)",
  },
  issueBox: {},
  topic: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 32,
  },
});

export default IssueBox;
