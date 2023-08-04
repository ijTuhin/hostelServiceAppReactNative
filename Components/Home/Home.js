import { View, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Features from "./Features";
import Header from "./Header";
import { useAuth } from "../Authentication/AuthContext";

const Home = ({ navigation }) => {
  const { getAllUserData, authState } = useAuth();
  useEffect(() => {
    getAllUserData();
  }, [authState.refresh]);
  return (
    <>
      <View
        style={{ paddingTop: 28, backgroundColor: "#0f172a", height: "100%" }}
      >
        <Header navigation={navigation} />
        <Features navigation={navigation} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({});
export default Home;
