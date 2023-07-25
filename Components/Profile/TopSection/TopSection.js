import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../../Authentication/AuthContext";

const TopSection = ({ navigation }) => {
  const { data } = useAuth();
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.user}>
          <FontAwesome name="user-circle-o" size={32} color="#d1d5db" />
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
          backgroundColor: "#083344",
          padding: 8,
          fontSize: 12,
          textAlign: "center",
          color:"#9ca3af"
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
