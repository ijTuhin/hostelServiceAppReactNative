import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Card } from "react-native-paper";

const Data = ({ data }) => {
  const item = data;
  return (
    <ScrollView style={{
      marginTop: 8,
    }}>
      {item &&
        item.map((i) => (
          <Card style={{marginVertical:4, backgroundColor:"#fff", marginHorizontal:16, borderRadius: 4}}>
            <View key={i._id} style={styles.container}>
              <View style={styles.left}>
                <Text style={styles.title}>{i.item}</Text>
                <Text style={styles.secondary}>Phone: +880131693724</Text>
                <Text style={styles.secondary}>{i.date}</Text>
              </View>
              <View style={styles.right}>
                <View style={styles.rightTop}>
                  <Text style={styles.bill}>{i.bill}/-</Text>
                  {i.package && (
                    <>
                      <Text>
                        <Octicons name="dot-fill" size={6} color="#ddd" />
                      </Text>
                      <Text style={styles.coupon}>
                        {i.package}
                        <FontAwesome5 name="coins" size={18} color="#FCD34D" />
                      </Text>
                    </>
                  )}
                </View>
                <Text style={styles.secondary}>Trans ID: ShCKyfoaJKhf</Text>
              </View>
            </View>
          </Card>
        ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    // marginTop: 8,
    padding: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 0,
    borderRadius: 2.4,
  },
  right: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
    alignItems: "flex-end",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 4,
  },
  rightTop: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  title: {
    fontSize: 18.4,
    fontWeight: 500,
    textTransform: "capitalize",
  },
  bill: {
    fontSize: 17,
    color: "red",
    fontWeight: 500,
  },
  coupon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    fontSize: 16,
    color: "#F59E0B",
    fontWeight: 500,
  },
  secondary:{
    fontSize: 12,
    color:"rgb(100, 116, 139)"
  }
});

export default Data;
