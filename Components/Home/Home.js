import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import React, { useEffect } from "react";
import Features from "./Features";
import Header from "./Header";
import { useAuth } from "../Authentication/AuthContext";

const Home = ({ navigation }) => {
  const { getAllUserData, getRefreshedData, refreshing, authState } = useAuth();
  useEffect(() => {
    getAllUserData();
  }, [authState.refresh]);
  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getRefreshedData}
          />
        }
        contentContainerStyle={{
          paddingTop: 28,
          backgroundColor: "#0f172a",
          height: "100%",
        }}
      >
        <Header navigation={navigation} />
        <Features navigation={navigation} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});
export default Home;
