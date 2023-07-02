import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Orders = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Orders</Text>
        <Text>Orders</Text>
        <Text>Orders</Text>
        <Text>Orders</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: "1.5rem",
  },
});

export default Orders;
