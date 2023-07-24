import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useAuth } from "../../Authentication/AuthContext";

const TopSection = ({ navigation }) => {
  const { data } = useAuth();
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.user}>
          <FontAwesome name="user-circle-o" size={32} color="#fff" />
          <View>
            <Text style={{ fontSize: 16, color: "#fff" }}>
              {data.user.name}
            </Text>
            <Text style={{ fontSize: 10.6, color: "#ddd" }}>
              {data.user.email}
            </Text>
          </View>
        </View>
        <Text
          onPress={() => navigation.navigate("Edit Profile")}
          style={styles.edit}
        >
          Edit Profile
        </Text>
      </View>
      <Text
        style={{
          backgroundColor: "rgb(245, 245, 244)",
          padding: 16,
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Member Since:
        {data.user.enroll}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    width: "100%",
    backgroundColor: "#164e63",
    padding: 24,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  edit: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    textAlign: "center",
    borderRadius: 4.8,
    color: "#ddd",
    fontSize: 16,
  },
});
export default TopSection;
