import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";

const Issues = ({ data }) => {
  return (
    <ScrollView contentContainerStyle={{ marginVertical: 52 }}>
      {data &&
        data.map((i) => (
          <View key={i._id} style={styles.container}>
            <View style={styles.top}>
              <View>
                <View style={styles.head}>
                  <Text style={{ fontSize: 16, fontWeight: 600 }}>
                    {i.topic}
                  </Text>
                  {i.solved && (
                    <MaterialCommunityIcons
                      style={{ marginTop: -5 }}
                      name="check-all"
                      size={20}
                      color="lightgreen"
                    />
                  )}
                </View>
                <View style={styles.time}>
                  <Text style={styles.secondaryText}>{i.date}</Text>
                  <Octicons name="dot-fill" size={8} color="#94A3B8" />
                  <Text style={styles.secondaryText}>Time</Text>
                </View>
              </View>
              <View style={styles.info}>
                <Text style={{ fontSize: 12 }}>To: {i.to}</Text>
              </View>
            </View>
            <Text style={styles.notice}>{i.note}</Text>
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
    paddingHorizontal: 8,
    marginHorizontal: 20,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 2.5,
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
  secondaryText: {
    fontSize: 10,
    color: "rgb(100, 116, 139)",
  },
  notice: {
    fontSize: 12,
    color: "rgb(100, 116, 139)",
  },
});

export default Issues;
