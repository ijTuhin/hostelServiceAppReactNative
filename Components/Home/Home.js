import { View, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Features from "./Features";
import Header from "./Header";
import { useAuth } from "../Authentication/AuthContext";
import axios from "axios";

const Home = ({ navigation }) => {
  const { setData, authState, data } = useAuth();
  const [selectedTab, setSelectedTab] = useState(0);
  console.log("||| HomeScreen line-13:", data?.user?.name);
  useEffect(() => {
    const testCall = async () => {
      const result = await axios.get(`http://192.168.0.109:3001/user/my-data`);
      console.log("Test Call:", result.data.user.name);
      setData(result.data);
    };
    testCall();
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
