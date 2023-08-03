import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import { useAuth } from "../../Authentication/AuthContext";
import { getTimeAndData } from "../../Hooks/Conditions";

const Attendances = () => {
  const { data } = useAuth();
  const value = data.attendance;
  return (
    <ScrollView contentContainerStyle={{ margin: 0, backgroundColor: "#fff" }}>
      {value &&
        value.map((i) => (
          <View key={i._id} style={styles.container}>
            <Ionicons
              name="md-checkmark-done-sharp"
              size={20}
              color="#14B8A6"
            />
            <View style={styles.info}>
              <Text style={styles.time}>
                {getTimeAndData(i._id).toLocaleTimeString()}
              </Text>
              <Octicons
                style={{ marginBottom: 1.6 }}
                name="dot-fill"
                size={4}
                color="#D1D5DB"
              />
              <Text style={styles.date}>{getTimeAndData(i._id).toLocaleDateString()}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottomColor: "rgb(226, 232, 240)",
    borderBottomWidth: 1,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 4,
  },
  time: {
    fontSize: 10,
  },
  date: {
    fontSize: 12,
    // fontWeight: 700,
    color: "#6B7280",
  },
});

export default Attendances;
