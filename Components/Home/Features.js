import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Card } from "react-native-paper";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuth } from "../Authentication/AuthContext";
import { checkMealTime, today } from "../Hooks/Conditions";
const Features = ({ navigation }) => {
  // const { confirmMealReceive, markAttendance } = useAuth();
  const { data } = useAuth();
  function check(i) {
    if (i === "A") {
      return data?.attendance[0]?.date !== today;
    } else if (i === "M") {
      return (
        (data?.orders[0]?.date === today &&
          data?.orders[0]?.meal === checkMealTime) ||
        (data?.orders[1]?.date === today && data?.orders[1]?.meal === checkMealTime)
      );
    }
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => navigation.navigate("Place Order")}
        style={styles.btnBox}
      >
        <Card
          style={{
            backgroundColor: "#fff",
            height: 160,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <MaterialIcons name="room-service" size={34} color="#134e4a" />
            <Text style={styles.btn}>Place Order</Text>
          </View>
        </Card>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Scan QR Code", {
            type: "A",
            text: "Your Attendance has been marked.",
            operate: check("A"),
            title: "Mark Attendance",
          })
        }
        style={styles.btnBox}
      >
        <Card
          style={{
            backgroundColor: "#fff",
            height: 160,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <MaterialCommunityIcons
              name="playlist-check"
              size={34}
              color="#134e4a"
            />
            <Text style={styles.btn}>Mark Attendance</Text>
          </View>
        </Card>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("Make Payment")}
        style={styles.btnBox}
      >
        <Card
          style={{
            backgroundColor: "#fff",
            height: 160,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <MaterialCommunityIcons
              name="credit-card-check-outline"
              size={34}
              color="#134e4a"
            />
            <Text style={styles.btn}>Payment</Text>
          </View>
        </Card>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Scan QR Code", {
            type: "M",
            text: "Sorry, time expired!!",
            operate: check("M"),
            title: "Confirm Meal",
          })
        }
        style={styles.btnBox}
      >
        <Card
          style={{
            backgroundColor: "#fff",
            height: 160,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <MaterialCommunityIcons
              name="hamburger-check"
              size={34}
              color="#134e4a"
            />
            <Text style={styles.btn}>Confirm Meal</Text>
          </View>
        </Card>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate("Post Issues")}
        style={styles.btnBox}
      >
        <Card
          style={{
            backgroundColor: "#fff",
            height: 160,
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap",
            }}
          >
            <MaterialCommunityIcons
              name="note-edit-outline"
              size={34}
              color="#134e4a"
            />
            <Text style={styles.btn}>Issues/ Complaints</Text>
          </View>
        </Card>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 24,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btn: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "#64748B",
    fontSize: 16,
    borderWidth: 0,
    borderRadius: 6.4,
    // boxShadow:
    //   "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  btnBox: { padding: 6, width: "50%" },
});

export default Features;
