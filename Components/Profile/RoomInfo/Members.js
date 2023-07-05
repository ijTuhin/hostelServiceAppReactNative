import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableRipple } from "react-native-paper";
import { roomMate } from "../../Hooks/PassData";

const Members = () => {
  const [display, setDisplay] = useState(null);
  return (
    <>
      {roomMate?.map((i, index) => (
        <View style={styles.body}>
          <View style={styles.infoBar}>
            <Text
              style={{
                fontSize: 18.4,
                fontWeight: 700,
                color: "rgb(13, 148, 136)",
                textTransform: "capitalize",
              }}
            >
              {i.matric}
            </Text>

            {display === index ? (
              <TouchableRipple
                style={{
                  borderRadius: "100%",
                  padding: 8,
                }}
                rippleColor="rgba(45, 212, 191, .32)"
                onPress={() => {
                  setDisplay(null);
                }}
              >
                <MaterialCommunityIcons
                  name="minus"
                  size={32}
                  color="rgb(13, 148, 136)"
                />
              </TouchableRipple>
            ) : (
              <TouchableRipple
                style={{
                  borderRadius: "100%",
                  padding: 8,
                }}
                rippleColor="rgba(45, 212, 191, .32)"
                onPress={() => {
                  setDisplay(index);
                }}
              >
                <MaterialCommunityIcons
                  name="gesture-tap-hold"
                  size={32}
                  color="rgb(13, 148, 136)"
                />
              </TouchableRipple>
            )}
          </View>
          <View
            style={[
              styles.info,
              display === index ? { display: "flex" } : { display: "none" },
            ]}
          >
            <Text>Name: {i.name}</Text>
            <Text>Department: {i.dept}</Text>
            <Text>Semester Enrolled: {i.sem}</Text>
          </View>
        </View>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  body: {
    padding: 8,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  infoBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "rgb(226, 232, 240)",
    flexDirection: "column",
  },
});
export default Members;
