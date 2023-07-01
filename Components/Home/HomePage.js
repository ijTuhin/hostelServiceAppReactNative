import { View, StyleSheet } from "react-native";
import React from "react";
import Features from "./Features";
import Header from "./Header";

const HomePage = () => {
  return (
    <>
      <View>
        <Header />
        <Features />
      </View>
    </>
  );
};
const styles = StyleSheet.create({});
export default HomePage;
