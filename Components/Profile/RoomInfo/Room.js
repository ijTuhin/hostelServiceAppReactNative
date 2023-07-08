import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Room = () => {
  return (
    <View style={styles.body}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
          width:108,
          height:108,
          borderWidth:1,
          borderRadius:1000,
          borderColor:"#fff",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#fff",
            textAlignVertical: "center",
            textAlign: "center",
          }}
        >
          401
        </Text>
        <Text style={{ color: "#fff", fontSize:10 }}>Total member: 06</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Room;
