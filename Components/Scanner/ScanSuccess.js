import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ScanSuccess({text}) {
  return (
    <View style={{}}>
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "center",
          color: "#71717a",
          fontSize: 24,
          paddingVertical: 16,
          height:"100%"
        }}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
