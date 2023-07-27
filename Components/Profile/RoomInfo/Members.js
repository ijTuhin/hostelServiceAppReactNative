import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, TouchableRipple } from "react-native-paper";

const Members = ({item}) => {
  const [display, setDisplay] = useState(null);
  return (
    <>
      {item?.map((i, index) => (
        <Card key={index}
          style={{
            marginVertical: 4,
            backgroundColor: "#083344",
            marginHorizontal: 16,
            borderRadius: 4,
          }}
        >
          <View
            style={{
              padding: 8,
            }}
          >
            <View style={styles.infoBar}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#cbd5e1",
                  textTransform: "capitalize",
                  paddingHorizontal: 8,
                }}
              >
                {i.matric}
              </Text>

              {display === index ? (
                <TouchableRipple
                  style={{
                    borderRadius: 9999,
                    padding: 4,
                  }}
                  rippleColor="rgba(0,0,0, .32)"
                  onPress={() => {
                    setDisplay(null);
                  }}
                >
                  <MaterialCommunityIcons
                    name="minus"
                    size={32}
                    color="#cbd5e1"
                  />
                </TouchableRipple>
              ) : (
                <TouchableRipple
                  style={{
                    borderRadius: 9999,
                    padding: 4,
                  }}
                  rippleColor="rgba(0,0,0, .15)"
                  onPress={() => {
                    setDisplay(index);
                  }}
                >
                  <MaterialCommunityIcons
                    name="gesture-tap-hold"
                    size={32}
                    color="#0891b2"
                  />
                </TouchableRipple>
              )}
            </View>
            <View
              style={[
                styles.info,
                display === index ? { display: "flex" } : { display: "none" },
              ]}
            >
              <Text style={{color:"#cbd5e1"}}>Name: {i.name}</Text>
              <Text style={{color:"#cbd5e1"}}>Department: {i.dept}</Text>
              <Text style={{color:"#cbd5e1"}}>Semester Enrolled: {i.sem}</Text>
            </View>
          </View>
        </Card>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  infoBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: "rgb(226, 232, 240)",
    flexDirection: "column",
    marginTop:8,
    color:"#cbd5e1"
  },
});
export default Members;
