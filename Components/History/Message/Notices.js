import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome, FontAwesome5, Octicons } from "@expo/vector-icons";
import React from "react";
import { useAuth } from "../../Authentication/AuthContext";

const Notices = () => {
  const { data } = useAuth();
  const value = data.notice;
  return (
    <ScrollView contentContainerStyle={{ marginTop: 0 }}>
      <View style={{ marginVertical: 16 }}>
        {value &&
          value.map((i) => (
            <View key={i._id} style={styles.container}>
              <View style={styles.top}>
                <FontAwesome
                  style={{ marginTop: 3 }}
                  name="user-circle"
                  size={24}
                  color="black"
                />
                <View style={styles.head}>
                  <Text style={{ fontSize: 16, fontWeight: 600 }}>
                    {i.title}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      columnGap: 2.5,
                    }}
                  >
                    <Text style={{ fontSize: 10 }}>From: {i.sender.role}</Text>
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
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    paddingVertical: 16,
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
    marginBottom: 6,
  },
  notice: {
    fontSize: 12,
    paddingRight: 12,
    textAlign: "justify",
  },
});

export default Notices;
