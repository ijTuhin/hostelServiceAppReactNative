import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Card } from "react-native-paper";

const Orders = () => {
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
    <ScrollView style={{ marginVertical: 4 }}>
      {data &&
        data.map((i) => (
          <Card
            style={{
              marginVertical: 4,
              backgroundColor: "#fff",
              marginHorizontal: 16,
              borderRadius: 2.4,
            }}
          >
            <View key={i._id} style={styles.container}>
              <View>
                <View style={styles.status}>
                  <Text>
                    {i.status ? (
                      <Octicons name="dot-fill" size={18} color="lightgreen" />
                    ) : (
                      <Octicons name="dot-fill" size={18} color="red" />
                    )}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {i.meal}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    color: "rgb(148, 163, 184)",
                  }}
                >
                  {i.date}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 10,
                  }}
                >
                  {i.time}
                </Text>
              </View>
            </View>
          </Card>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    // marginTop: 8,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderWidth: 0,
    borderRadius: 2.4,
    // boxShadow:
    //   "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
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
    gap: 4,
  },
});

export default Orders;
