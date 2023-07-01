import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Features = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.btn} onPress={()=>{console.log("Pressed to Place Order")}}>Place Order</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.btn}>Mark Attendance</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.btn}>Payment</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.btn}>Confirm Order</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.btn}>Issues/ Complaints</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: "1.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "10px",
  },
  btn: {
    padding: 10,
    height: "8.5rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#64748B",
    fontSize: "1.25rem",
    borderWidth: 0,
    borderRadius: "0.4rem",
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
  },
});

export default Features;