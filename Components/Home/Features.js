import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Features = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.btnBox}>
        <Text
          style={styles.btn}
          onPress={() => {
            console.log("Pressed to Place Order");
          }}
        >
          Place Order
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btnBox}>
        <Text style={styles.btn}>Mark Attendance</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btnBox}>
        <Text style={styles.btn}>Payment</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btnBox}>
        <Text style={styles.btn}>Confirm Meal</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.btnBox}>
        <Text style={styles.btn}>Issues/ Complaints</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    // display: "grid",
    // gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    // gap: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn: {
    padding: 10,
    height: 136,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#64748B",
    fontSize: 20,
    borderWidth: 0,
    borderRadius: 6.4,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  btnBox: { height: 136, padding: 6, width: "50%" },
});

export default Features;
