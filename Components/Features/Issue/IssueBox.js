import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { issues } from "../../Hooks/PassData";
import { TouchableRipple } from "react-native-paper";
import PostBoxModal from "./PostBoxModal";

const IssueBox = () => {
  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <FontAwesome5
          style={styles.topIcon}
          name="box-open"
          size={30}
          color="#fff"
        />
        <View style={styles.issues}>
          <PostBoxModal
            visible={visible}
            setVisible={setVisible}
            hideModal={hideModal}
            data={data}
            set={setData}
          />
          {issues.map((i, index) => (
            <TouchableRipple
              onPress={() => {
                console.log("sfsf");
                setData({
                  topic: i.topic,
                  to: i.to,
                });
                setVisible(true);
              }}
              rippleColor="rgba(0, 0, 0, .32)"
              key={index}
              style={styles.issue}
            >
              <>
                {i.icon}
                <Text style={styles.topic}>{i.topic}</Text>
              </>
            </TouchableRipple>
          ))}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100vw",
    top: -16,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    marginHorizontal: 16,
    backgroundColor: "#fff",
  },
  topIcon: {
    borderRadius: "100%",
    width: 72,
    height: 72,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -40,
    backgroundColor: "#0F766E",
  },
  issues: {
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    // display: "grid",
    // gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    // gap: 16,
    marginVertical: 48,
    width: "100%",
    paddingHorizontal: 24,
    justifyContent:"center"
  },
  issue: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    boxShadow:
      "0 4px 6px -1px rgb(13 148 136 / 0.1), 0 2px 4px -2px rgb(13 148 136 / 0.1)",
    paddingVertical: 32,
    paddingHorizontal: 8,
    borderRadius: 4,
    width:"35vw",
    margin:8
  },
  issueBox:{},
  topic: {
    fontSize: 18.4,
    textAlign: "center",
  },
});

export default IssueBox;
