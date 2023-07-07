import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome, FontAwesome5, Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

const Notices = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://192.168.0.107:3001/notice/get`)
      .then((response) => response.json())
      .then((item) => {
        setData(item);
        console.log(item);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <ScrollView style={{ marginTop: 64 }}>
      {data &&
        data.map((i) => (
          <View key={i._id} style={styles.container}>
            <View style={styles.top}>
              <FontAwesome
                style={{ marginTop: 3 }}
                name="user-circle"
                size={24}
                color="black"
              />
              <View style={styles.head}>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>{i.title}</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    columnGap: 2.5,
                  }}
                >
                  <Text style={{ fontSize: 11 }}>From</Text>
                  <Octicons
                    name="dot-fill"
                    style={{ marginBottom: 1.5 }}
                    size={4}
                    color="#94A3B8"
                  />
                  {i.to === "All Users" ? (
                    <FontAwesome5
                      style={{ marginBottom: 1.6 }}
                      name="users"
                      size={9}
                      color="#64748B"
                    />
                  ) : (
                    <FontAwesome5
                      style={{ marginBottom: 1.6 }}
                      name="user-alt"
                      size={9}
                      color="#64748B"
                    />
                  )}
                </View>
              </View>
            </View>
            <Text style={styles.notice}>{i.notice}</Text>
          </View>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 28,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
  },
  head: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  notice: {
    fontSize: 12,
    // color:"rgb(100, 116, 139)",
    paddingRight: 12,
    textAlign: "justify",
  },
});

export default Notices;
