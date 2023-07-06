import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

const Issues = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://192.168.0.107:3001/meal/data?date=6/21/2023`)
      .then((response) => response.json())
      .then((item) => {
        setData(item);
        // console.warn(data);
      })
      // .catch((e) => console.error(e));
  }, []);
  return (
    <ScrollView style={{marginTop:64}}>
      {data &&
        data.map((i) => (
          <View key={i._id} style={styles.container}>
            <View style={styles.top}>
              <View>
                <View style={styles.head}>
                  <Text style={{ fontSize: 24, fontWeight: 600 }}>
                    Topic Name
                  </Text>
                  <MaterialCommunityIcons
                    style={{ marginTop: 3.2 }}
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
                <Text style={{ fontSize: 17.6 }}>To: warden</Text>
              </View>
            </View>
            <Text style={{ fontSize: 16.8 }}>
              Issues jhldoy;s jhlwioeyt djlh;idsogpa djg;aoiey
            </Text>
          </View>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    paddingVertical: 12,
    paddingHorizontal: 18.4,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 5.6,
  },
  head: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
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
    gap: 8,
  },
});

export default Issues;
