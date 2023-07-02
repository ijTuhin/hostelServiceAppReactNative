import { View, Text, StyleSheet } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

const Attendances = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/meal/data?date=6/21/2023`)
      .then((response) => response.json())
      .then((item) => {
        setData(item);
        console.log(item);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      {data &&
        data.map((i) => (
          <View key={i._id} style={styles.container}>
            <Ionicons
              name="md-checkmark-done-sharp"
              size={32}
              color="#14B8A6"
            />
            <View style={styles.info}>
              <Text style={styles.time}>{i.time}</Text>
              <Octicons name="dot-fill" size={10} color="#D1D5DB" />
              <Text style={styles.date}>{i.date}</Text>
            </View>
          </View>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: "1rem",
    marginTop: "0.5rem",
    paddingHorizontal: "1rem",
    paddingVertical: "0.75rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    border: "1px solid #D1D5DB",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    // borderRadius: "0.15rem",
    // boxShadow:
    //   "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: "0.5rem",
  },
  time: {
    fontSize: "0.75rem",
  },
  date: {
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#6B7280",
  },
});

export default Attendances;
