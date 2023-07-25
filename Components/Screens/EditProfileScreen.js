import { View, Text, StyleSheet, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import EditForm from "../Profile/EditProfile/EditForm";
import { FontAwesome5 } from "@expo/vector-icons";

const EditProfileScreen = () => {
  return (
    <View style={styles.body}>
      <KeyboardAwareScrollView>
        <View style={styles.top}>
          <Text style={styles.icon}>
            <FontAwesome5 name="user-edit" size={36} color="#164e63" />
          </Text>
        </View>
        <EditForm />
      </KeyboardAwareScrollView>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 96,
    backgroundColor: "#164e63",
  },
  icon: {
    width: 104,
    height: 104,
    borderWidth: 12,
    borderColor: "#164e63",
    borderRadius: 1000,
    textAlign: "center",
    textAlignVertical: "center",
    position: "absolute",
    top: "40%",
    backgroundColor: "#ffffff",
  },
});

export default EditProfileScreen;
