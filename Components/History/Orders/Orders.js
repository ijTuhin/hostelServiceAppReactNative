import { View, Text, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

const Orders = () => {
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
            <View>
              <View style={styles.status}>
                <Text style={styles.meal}>{i.meal}</Text>
                <Text>
                  {
                    i.status ? <Octicons name="dot-fill" size={24} color="lightgreen" /> : <Octicons name="dot-fill" size={24} color="red" />
                  }
                </Text>
              </View>
              <Text style={styles.time}>{i.time}</Text>
            </View>
            <View>
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
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth: 0,
    borderRadius: 2.4,
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  status: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  meal: {
    fontSize: 21.6,
    fontWeight: 500,
  },
  time: {
    fontSize: 16.8,
  },
  date: {
    fontSize: 18.4,
  },
});

export default Orders;
