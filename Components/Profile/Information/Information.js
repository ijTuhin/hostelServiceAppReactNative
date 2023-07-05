import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Information = () => {
  return (
    <View style={styles.body}>
      <View style={styles.user}>
        <FontAwesome name="user-circle-o" size={40} color="#fff" />
        <View>
          <Text style={{ fontSize: "1.35rem", color: "#fff" }}>
            User Name
          </Text>
          <Text style={{ color: "#ddd" }}>matricId@ugrad.iiuc.ac.bd</Text>
        </View>
      </View>
      <View style={styles.data}>
        <Text style={styles.infoHead}>Academic Data</Text>
        <Text style={styles.info}>Matric ID:</Text>
        <Text style={styles.info}>Department:</Text>
        <Text style={styles.info}>Semester Enrolled:</Text>
        <Text style={styles.info}>Last session:</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.infoHead}>Personal Info</Text>
        <Text style={styles.info}>Phone number:</Text>
        <Text style={styles.info}>Permanant Address:</Text>
        <Text style={styles.info}>Thana:</Text>
        <Text style={styles.info}>District:</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "rgb(241, 245, 249)",
  },
  user: {
    width: "100vw",
    backgroundColor: "#0F766E",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.75rem",
  },
  data: {
    marginTop: "0.75rem",
    backgroundColor: "#fff",
    padding: "1rem",
  },
  infoHead: {
    borderBottomWidth: "1px",
    borderBottomColor: "rgb(226, 232, 240)",
    paddingBottom: "0.5rem",
    paddingHorizontal: "0.3rem",
    fontSize: "1.15rem",
    fontWeight: "700",
    color: "rgb(71, 85, 105)",
  },
  info: {
    paddingHorizontal: "0.3rem",
    paddingTop: "0.3rem",
  },
});
export default Information;
