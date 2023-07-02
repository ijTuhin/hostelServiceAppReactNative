import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const Data = ({data}) => {
  const item = data
  return (
    <ScrollView>
      {item &&
        item.map((i) => (
          <View key={i._id} style={styles.container}>
            <View style={styles.left}>
              <Text style={styles.title}>{i.item}</Text>
              <Text style={styles.trans}>Phone: +880131693724</Text>
              <Text style={styles.date}>{i.date}</Text>
            </View>
            <View style={styles.right}>
              <View style={styles.rightTop}>
                <Text style={styles.bill}>{i.bill}</Text>
                {i.package && (
                  <>
                    <Text>
                      <Octicons name="dot-fill" size={10} color="#ddd" />
                    </Text>
                    <Text style={styles.coupon}>
                      {i.package}
                      <FontAwesome5 name="coins" size={18} color="#FCD34D" />
                    </Text>
                  </>
                )}
              </View>
              <Text style={styles.date}>Trans ID: ShCKyfoaJKhf</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: "1rem",
    marginTop: "0.5rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 0,
    borderRadius: "0.15rem",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "0.5rem",
    alignItems: "flex-end",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "0.25rem",
    // alignItems: "",
  },
  rightTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: "0.5rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: 500,
    textTransform: "capitalize",
  },
  bill: {
    fontSize: "1.25rem",
    color: "red",
    fontWeight: 500,
  },
  coupon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "1.15rem",
    color: "#F59E0B",
    fontWeight: 500,
  },
  date: {
    fontSize: "0.9rem",
  },
  trans: {
    fontSize: "0.95rem",
  },
});

export default Data;
