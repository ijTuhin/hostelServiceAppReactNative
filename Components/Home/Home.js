import { View, StyleSheet } from "react-native";
import React from "react";
import Features from "./Features";
import Header from "./Header";

const Home = ({navigation}) => {
  return (
    <>
      <View>
        <Header navigation={navigation} />
        <Features navigation={navigation} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({});
export default Home;