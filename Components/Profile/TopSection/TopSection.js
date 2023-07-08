import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const TopSection = ({navigation}) => {
  return (
    <View>
      <View style={styles.body}>
        <View style={styles.user}>
          <FontAwesome name="user-circle-o" size={32} color="#fff" />
          <View>
            <Text style={{ fontSize: 16, color: "#fff" }}>
              Israt Jahan
            </Text>
            <Text style={{ fontSize: 10.6, color: "#ddd" }}>c111111@ugrad.iiuc.ac.bd</Text>
          </View>
        </View>
        <Text
          onPress={() => {
            console.log("navigate to Edit Profile");
            navigation.navigate('Edit Profile')
          }}
          style={styles.edit}
        >
          Edit Profile
        </Text>
      </View>
      <Text
        style={{
          backgroundColor: "rgb(245, 245, 244)",
          padding: 16,
          fontSize: 16,
          textAlign: "center",
        }}
      >
        Member Since: July
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    width: "100%",
    backgroundColor: "#0F766E",
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
    borderWidth:1,
    borderColor:"#ddd",
    padding: 8,
    textAlign: "center",
    borderRadius: 4.8,
    color: "#ddd",
    fontSize: 16,
  },
});
export default TopSection;
