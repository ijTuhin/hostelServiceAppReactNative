import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Octicons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Card } from "react-native-paper";

const Data = ({ data }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 1.6,
      }}
    >
      <View style={{marginBottom:24}}>
        {data &&
          data.map((i) => (
            <Card
              key={i._id}
              style={{
                marginBottom: 8,
                backgroundColor: "#fff",
                marginHorizontal: 16,
                borderRadius: 4,
              }}
            >
              <View style={styles.container}>
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
                        <View style={styles.coupon}>
                          <Text
                            style={{
                              fontSize: 12,
                              color: "#F59E0B",
                              fontWeight: 500,
                            }}
                          >
                            {i.package * 3}
                          </Text>
                          <Text>
                            <FontAwesome5
                              name="coins"
                              size={12}
                              color="#FCD34D"
                            />
                          </Text>
                        </View>
                      </>
                    )}
                  </View>
                  <Text style={styles.secondary}>Trans ID: {i.trxID}</Text>
                </View>
              </View>
            </Card>
          ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
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
    gap: 3.6,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    textTransform: "capitalize",
  },
  bill: {
    fontSize: 12,
    color: "red",
    fontWeight: 500,
  },
  coupon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  secondary: {
    fontSize: 12,
    color: "rgb(100, 116, 139)",
  },
});

export default Data;
