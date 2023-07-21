import { StyleSheet, Text, View } from "react-native";
import Home from "../Home/Home";
import HistoryPage from "../History/HistoryPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { TouchableRipple } from "react-native-paper";
import axios from "axios";
import { useAuth } from "../Authentication/AuthContext";

const HomeScreen = ({ navigation }) => {
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
  const PrimaryOutletItems = () => {
    switch (selectedTab) {
      case 0:
        return <Home navigation={navigation} />;
      case 1:
        return <HistoryPage />;
      default:
        return <Home navigation={navigation} />;
    }
  };
  return (
    <View style={styles.body}>
      {/* =====================================
                DashBoard Outlet
        ====================================== */}
      <View>{PrimaryOutletItems()}</View>
      {/* =====================================
                DashBoard Common NavBar
        ====================================== */}
      <View style={styles.navBar}>
        <TouchableRipple
          style={[
            styles.menu,
            selectedTab
              ? { backgroundColor: "#134e4a" }
              : { backgroundColor: "#275754" },
          ]}
          onPress={() => {
            setSelectedTab(0);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text>
            <MaterialCommunityIcons name="home" size={28} color="#D1D5DB" />
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={[
            styles.menu,
            selectedTab
              ? { backgroundColor: "#275754" }
              : { backgroundColor: "#134e4a" },
          ]}
          onPress={() => {
            setSelectedTab(1);
          }}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text>
            <MaterialCommunityIcons name="history" size={28} color="#D1D5DB" />
          </Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    position: "relative",
    width: "100%",
    marginTop: 28,
  },
  navBar: {
    width: "100%",
    // position: "fixed",
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 9.6,
    width: "50%",
  },
});

export default HomeScreen;
