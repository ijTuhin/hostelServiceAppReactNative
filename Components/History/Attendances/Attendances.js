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
    marginHorizontal: 16,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomColor:"#D1D5DB",
    borderBottomWidth: 1
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 8,
  },
  time: {
    fontSize: 12,
  },
  date: {
    fontSize: 18.4,
    fontWeight: 700,
    color: "#6B7280",
  },
});

export default Attendances;
