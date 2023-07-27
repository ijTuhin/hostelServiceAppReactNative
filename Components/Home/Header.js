import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import React from "react";
import { useAuth } from "../Authentication/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../configFirebase";

const Header = ({ navigation }) => {
  const { UserLogOut } = useAuth();
  return (
    <View style={styles.header}>
      <TouchableHighlight>
        <Text onPress={() => navigation.navigate("Profile")}>
          <FontAwesome name="user-circle-o" size={32} color="#D1D5DB" />
        </Text>
      </TouchableHighlight>
      <Text style={styles.appTag}>Hostel Service App</Text>
      <Text
        onPress={async () => {
          signOut(auth).then(() => {
            console.log("Nikal gaya!");
            UserLogOut();
          });
        }}
        style={styles.texts}
      >
        <AntDesign name="logout" size={24} color="#D1D5DB" />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#334155",
    paddingVertical: 20,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  texts: {
    color: "#ffffff",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#ffffff",
    borderRadius: "100%",
  },
  appTag: {
    color: "#ffffff",
    fontSize: 23.2,
    fontStyle: "italic",
  },
});

export default Header;
