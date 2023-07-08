import { StyleSheet, Text, View } from "react-native";
import HomePage from "./HomePage";
import HistoryPage from "../History/HistoryPage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableRipple } from "react-native-paper";
import Issues from "../Features/Issue/Issues";
import MakePayment from "../Features/Payment/MakePayment";
import PlaceOrder from "../Features/Order/PlaceOrder";
import ProfileScreen from "../Profile/ProfileScreen";
import EditProfile from "../Profile/EditProfile/EditProfile";
import RoomInfo from "../Profile/RoomInfo/RoomInfo";
import Information from "../Profile/Information/Information";
import LoginScreen from "../Authentication/LoginScreen";
// import PlaceOrder from "../Components/Features/Order/PlaceOrder";
// import Payment from "../Features/Payment/MakePayment";
// import Issues from "../Features/Issue/Issues";
// import ProfileScreen from "../Profile/ProfileScreen";
// import EditProfile from "../Profile/EditProfile/EditProfile";
// import RoomInfo from "../Profile/RoomInfo/RoomInfo";
// import Information from "../Profile/Information/Information";
// import MakePayment from "../Features/Payment/MakePayment";
// import LoginScreen from "../Authentication/LoginScreen";

const Home = () => {
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
    //   <PlaceOrder />
    //   <MakePayment />
    //   <Issues />
    //   <ProfileScreen/>
    //   <EditProfile/>
    //   <RoomInfo/>
    //   <Information/>
    //   <LoginScreen/>
  
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
      marginTop:28,
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

export default Home