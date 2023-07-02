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
              <FontAwesome style={{ marginTop: "0.35rem" }} name="user-circle" size={24} color="black" />
              <View style={styles.head}>
                <Text style={{ fontSize: "1.15rem", fontWeight: 600 }}>
                  {i.title}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    columnGap: "0.25rem",
                  }}
                >
                  <Text style={{ fontSize: "0.85rem" }}>From</Text>
                  <Octicons name="dot-fill" size={8} color="#94A3B8" />
                  {i.to === "All Users" ? (
                    <FontAwesome5 style={{ marginBottom: "0.1rem" }} name="users" size={14} color="#64748B" />
                  ) : (
                    <FontAwesome5 style={{ marginBottom: "0.15rem" }} name="user-alt" size={12} color="#64748B" />
                  )}
                </View>
              </View>
            </View>
            <Text style={{paddingRight:"0.75rem", textAlign:"justify"}}>{i.notice}</Text>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  head: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }
});

export default Notices;
