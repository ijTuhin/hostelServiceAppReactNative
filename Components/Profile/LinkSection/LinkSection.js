import { View, Text, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableRipple } from "react-native-paper";

const LinkSection = () => {
  return (
    <View
      style={{
        margin: "1rem",
      }}
    >
      <TouchableRipple
        style={{
          marginBottom: "0.5rem",
          borderRadius: "0.3rem",
        }}
        onPress={() => {
          // setSelectedTab(1);
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.link}>
          History
          <EvilIcons
            name="chevron-right"
            size={32}
            color="rgb(148, 163, 184)"
          />
        </Text>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: "0.5rem",
          borderRadius: "0.3rem",
        }}
        onPress={() => {
          // setSelectedTab(1);
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.link}>
          Information
          <EvilIcons
            name="chevron-right"
            size={32}
            color="rgb(148, 163, 184)"
          />
        </Text>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: "0.5rem",
          borderRadius: "0.3rem",
        }}
        onPress={() => {
          // setSelectedTab(1);
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.link}>
          Room Info
          <EvilIcons
            name="chevron-right"
            size={32}
            color="rgb(148, 163, 184)"
          />
        </Text>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: "0.5rem",
          borderRadius: "0.3rem",
        }}
        onPress={() => {
          // setSelectedTab(1);
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.link}>
          Coupon Details
          <EvilIcons
            name="chevron-right"
            size={32}
            color="rgb(148, 163, 184)"
          />
        </Text>
      </TouchableRipple>
      <TouchableRipple
        style={{
          marginBottom: "0.5rem",
          borderRadius: "0.3rem",
        }}
        onPress={() => {
          // setSelectedTab(1);
        }}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <Text style={styles.link}>
          Check Rent
          <EvilIcons
            name="chevron-right"
            size={32}
            color="rgb(148, 163, 184)"
          />
        </Text>
      </TouchableRipple>
    </View>
  );
};
const styles = StyleSheet.create({
  link: {
    border: "1px solid rgb(226, 232, 240)",
    padding: "0.75rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "0.3rem",
    color: "rgb(100, 116, 139)",
  },
});
export default LinkSection;
