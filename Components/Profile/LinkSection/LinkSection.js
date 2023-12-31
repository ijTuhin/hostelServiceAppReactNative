import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableRipple } from "react-native-paper";

const LinkSection = ({ navigation }) => {
  return (
    <View
      style={{
        margin: 16,
      }}
    >
      <TouchableRipple
        style={{
          marginBottom: 8,
          borderRadius: 4.8,
          // backgroundColor:"#fff"
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate("Browse History");
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.link}>
          <Text style={{ color: "rgb(100, 116, 139)" }}>History</Text>
          <EvilIcons
            name="chevron-right"
            size={28}
            color="rgb(148, 163, 184)"
          />
        </View>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: 8,
          borderRadius: 4.8,
          // backgroundColor:"#fff"
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate("Information");
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.link}>
          <Text style={{ color: "rgb(100, 116, 139)" }}>Information</Text>
          <EvilIcons
            name="chevron-right"
            size={28}
            color="rgb(148, 163, 184)"
          />
        </View>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: 8,
          borderRadius: 4.8,
          // backgroundColor:"#fff"
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate("Room Info");
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.link}>
          <Text style={{ color: "rgb(100, 116, 139)" }}>Room Info</Text>
          <EvilIcons
            name="chevron-right"
            size={28}
            color="rgb(148, 163, 184)"
          />
        </View>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: 8,
          borderRadius: 4.8,
          // backgroundColor:"#fff"
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate("Make Payment", { screen: "Meal Bill" });
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.link}>
          <Text style={{ color: "rgb(100, 116, 139)" }}>Coupon Details</Text>
          <EvilIcons
            name="chevron-right"
            size={28}
            color="rgb(148, 163, 184)"
          />
        </View>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: 8,
          borderRadius: 4.8,
          // backgroundColor:"#fff"
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate("Make Payment", { screen: "Seat Rent" });
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={styles.link}>
          <Text style={{ color: "rgb(100, 116, 139)" }}>Check Rent</Text>
          <EvilIcons
            name="chevron-right"
            size={28}
            color="rgb(148, 163, 184)"
          />
        </View>
      </TouchableRipple>
    </View>
  );
};
const styles = StyleSheet.create({
  link: {
    borderWidth: 1,
    borderColor: "rgb(226, 232, 240)",
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4.8,
  },
});
export default LinkSection;
