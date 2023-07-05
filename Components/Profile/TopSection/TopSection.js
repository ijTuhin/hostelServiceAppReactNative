import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const TopSection = () => {
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.user}>
          <FontAwesome name="user-circle-o" size={40} color="#fff" />
          <View>
            <Text style={{ fontSize: "1.35rem", color: "#fff" }}>
              Israt Jahan
            </Text>
            <Text style={{ color: "#ddd" }}>c111111@ugrad.iiuc.ac.bd</Text>
          </View>
        </View>
        <Text
          onPress={() => {
            console.log("navigate to Edit Profile");
          }}
          style={styles.edit}
        >
          Edit Profile
        </Text>
      </View>
      <Text
        style={{
          backgroundColor: "rgb(245, 245, 244)",
          padding: "1rem",
          fontSize: "1rem",
          textAlign: "center",
        }}
      >
        Member Since: July
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    width: "100vw",
    backgroundColor: "#0F766E",
    padding: "1rem",
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.75rem",
  },
  edit: {
    marginTop: "1rem",
    border: "1px solid #ddd",
    padding: "0.5rem",
    textAlign: "center",
    borderRadius: "0.3rem",
    color: "#ddd",
    fontSize: "1rem",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
});
export default TopSection;
