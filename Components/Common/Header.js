import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={{ width: "100%", maxHeight: 20, backgroundColor: "#000" }}>
      <Text>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 8,
    backgroundColor: "#000",
    width: "100%",
  },
});
