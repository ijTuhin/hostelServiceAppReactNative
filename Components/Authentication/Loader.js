import { View, Text,ActivityIndicator } from "react-native";
import React from "react";
export default function Loader() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#020617",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        gap:20
      }}
    >
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          color: "#06b6d4",
          fontSize: 20,
        }}
      >
        Please wait...
      </Text>
      <ActivityIndicator size="small" color="#06b6d4" />
    </View>
  );
}
