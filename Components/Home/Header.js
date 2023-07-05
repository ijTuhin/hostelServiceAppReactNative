import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableHighlight>
        <Text>
          <FontAwesome name="user-circle-o" size={32} color="#D1D5DB" />
        </Text>
      </TouchableHighlight>
      <Text style={styles.appTag}>Hostel Service App</Text>
      <Text style={styles.texts}>
        <AntDesign name="logout" size={24} color="#D1D5DB" />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#134e4a",
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
