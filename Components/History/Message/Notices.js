import { View, Text, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5, Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

const Notices = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/notice/get`)
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
            <View style={styles.top}>
              <FontAwesome style={{ marginTop: 5.6 }} name="user-circle" size={24} color="black" />
              <View style={styles.head}>
                <Text style={{ fontSize: 18.4, fontWeight: 600 }}>
                  {i.title}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    columnGap: 4,
                  }}
                >
                  <Text style={{ fontSize: 13.6 }}>From</Text>
                  <Octicons name="dot-fill" size={8} color="#94A3B8" />
                  {i.to === "All Users" ? (
                    <FontAwesome5 style={{ marginBottom: 1.6 }} name="users" size={14} color="#64748B" />
                  ) : (
                    <FontAwesome5 style={{ marginBottom: 2.4 }} name="user-alt" size={12} color="#64748B" />
                  )}
                </View>
              </View>
            </View>
            <Text style={{paddingRight:12, textAlign:"justify"}}>{i.notice}</Text>
          </View>
        ))}
    </View>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 8,
  },
  head: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }
});

export default Notices;
