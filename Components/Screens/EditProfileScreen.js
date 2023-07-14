import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import EditForm from "../Profile/EditProfile/EditForm";
import { FontAwesome5 } from "@expo/vector-icons";

const EditProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <View style={styles.top}>
        <Text style={styles.icon}>
          <FontAwesome5 name="user-edit" size={36} color="#0F766E" />
        </Text>
      </View>
      <EditForm />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 96,
    backgroundColor: "#0F766E",
  },
  icon: {
    width: 104,
    height: 104,
    borderWidth: 12,
    borderColor: "#0F766E",
    borderRadius: 1000,
    textAlign:"center",
    textAlignVertical:"center",
    position: "absolute",
    top: "40%",
    backgroundColor: "#ffffff",
  },
});

export default EditProfileScreen;