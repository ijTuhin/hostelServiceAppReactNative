import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../Authentication/AuthContext";

const Information = () => {
  const { data } = useAuth();
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.user}>
        <FontAwesome name="user-circle-o" size={32} color="#fff" />
        <View>
          <Text style={{ fontSize: 17.6, color: "#fff" }}>{data.user.name}</Text>
          <Text style={{ fontSize: 11, color: "#ddd" }}>{data.user.email}</Text>
        </View>
      </View>
      <View style={styles.data}>
        <Text style={styles.infoHead}>Academic Data</Text>
        <Text style={styles.info}>Matric ID: {data.user.matric} </Text>
        <Text style={styles.info}>Department: {data.user.dept} </Text>
        <Text style={styles.info}>Semester Enrolled: {data.user.sem} </Text>
        <Text style={styles.info}>Last session:</Text>
      </View>
      <View style={styles.data}>
        <Text style={styles.infoHead}>Personal Info</Text>
        <Text style={styles.info}>Phone number: {data.user.phone} </Text>
        <Text style={styles.info}>Permanant Address: {data.user.address} </Text>
        <Text style={styles.info}>Thana: {data.user.thana} </Text>
        <Text style={styles.info}>District: {data.user.district} </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    // marginTop: 28,
    flex: 1,
    backgroundColor: "rgb(241, 245, 249)",
  },
  user: {
    width: "100%",
    backgroundColor: "#164e63",
    padding: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  data: {
    marginTop: 6.4,
    backgroundColor: "#fff",
    padding: 16,
  },
  infoHead: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(226, 232, 240)",
    paddingBottom: 8,
    paddingHorizontal: 4.8,
    fontSize: 18.4,
    fontWeight: 700,
    color: "rgb(71, 85, 105)",
  },
  info: {
    paddingHorizontal: 4.8,
    paddingTop: 4.8,
  },
});
export default Information;
