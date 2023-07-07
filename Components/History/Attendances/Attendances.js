import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

const Attendances = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://192.168.0.107:3001/meal/data?date=6/21/2023`)
      .then((response) => response.json())
      .then((item) => {
        setData(item);
        console.log(item);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <ScrollView style={{margin:8}}>
      {data &&
        data.map((i) => (
          <View key={i._id} style={styles.container}>
            <Ionicons
              name="md-checkmark-done-sharp"
              size={20}
              color="#14B8A6"
            />
            <View style={styles.info}>
              <Text style={styles.time}>{i.time}</Text>
              <Octicons style={{marginBottom:1.6}} name="dot-fill" size={4} color="#D1D5DB" />
              <Text style={styles.date}>{i.date}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
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
    borderBottomColor:"rgb(226, 232, 240)",
    borderBottomWidth: 1
  },
  info: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 4,
  },
  time: {
    fontSize: 10,
  },
  date: {
    fontSize: 12,
    // fontWeight: 700,
    color: "#6B7280",
  },
});

export default Attendances;
