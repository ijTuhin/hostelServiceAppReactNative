import { View, Text, StyleSheet } from "react-native";
import React from "react";
import EditForm from "./EditForm";
import { FontAwesome5 } from "@expo/vector-icons";

const EditProfile = () => {
  return (
    <View style={styles.body}>
      <View style={styles.top}>
        <FontAwesome5 style={styles.icon} name="user-edit" size={36} color="#0F766E" />
      </View>
      <EditForm />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  top: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    width:"100vw",
    height:"6rem",
    backgroundColor:"#0F766E",
  },
  icon: {
    width:"6.5rem",
    height:"6.5rem",
    border:"0.75rem solid #0F766E",
    borderRadius:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    top:"40%",
    backgroundColor: "#ffffff",
  },
});

export default EditProfile;
