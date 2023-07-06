import { StyleSheet, Text, View } from "react-native";
import HomePage from "./Components/Home/HomePage";
import HistoryPage from "./Components/History/HistoryPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import PlaceOrder from "./Components/Features/Order/PlaceOrder";
import Payment from "./Components/Features/Payment/MakePayment";
import Issues from "./Components/Features/Issue/Issues";
import ProfileScreen from "./Components/Profile/ProfileScreen";
import EditProfile from "./Components/Profile/EditProfile/EditProfile";
import RoomInfo from "./Components/Profile/RoomInfo/RoomInfo";
import Information from "./Components/Profile/Information/Information";
import MakePayment from "./Components/Features/Payment/MakePayment";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const PrimaryOutletItems = () => {
    switch (selectedTab) {
      case 0:
        return <HomePage />;
      case 1:
        return <HistoryPage />;
      default:
        return <HomePage />;
    }
  };
  return (
    // <PlaceOrder />
    // <MakePayment />
    // <Issues />
    // <ProfileScreen/>
    // <EditProfile/>
    // <RoomInfo/>
    // <Information/>

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
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    position: "relative",
    width: "100%",
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
