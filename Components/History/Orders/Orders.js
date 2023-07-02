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
    marginHorizontal: "1rem",
    marginTop: "0.5rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth: 0,
    borderRadius: "0.15rem",
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
    gap: "0.5rem",
  },
  meal: {
    fontSize: "1.35rem",
    fontWeight: 500,
  },
  time: {
    fontSize: "1.05rem",
  },
  date: {
    fontSize: "1.15rem",
  },
});

export default Orders;
