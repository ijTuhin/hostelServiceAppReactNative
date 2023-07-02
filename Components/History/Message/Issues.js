import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

const Issues = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/meal/data?date=6/21/2023`)
      .then((response) => response.json())
      .then((item) => {
        setData(item);
      });
  }, []);
  return (
    <View>
      {data &&
        data.map((i) => (
          <View key={i._id} style={styles.container}>
            <View style={styles.top}>
              <View>
                <View style={styles.head}>
                  <Text style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                    Topic Name
                  </Text>
                  <MaterialCommunityIcons
                    style={{ marginTop: "0.2rem" }}
                    name="check-all"
                    size={28}
                    color="lightgreen"
                  />
                </View>
                <View style={styles.time}>
                  <Text>Date</Text>
                  <Octicons name="dot-fill" size={8} color="#94A3B8" />
                  <Text>Time</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={{ fontSize: "1.1rem" }}>To: warden</Text>
              </View>
            </View>
            <Text style={{ fontSize: "1.05rem" }}>
              Issues jhldoy;s jhlwioeyt djlh;idsogpa djg;aoiey
            </Text>
          </View>
        ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: "1px",
    borderBottomColor: "#D1D5DB",
    paddingVertical: "0.75rem",
    paddingHorizontal: "1.15rem",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "0.35rem",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  time: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: "0.5rem",
  },
});

export default Issues;
