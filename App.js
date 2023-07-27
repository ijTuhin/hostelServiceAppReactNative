import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Components/Screens/LoginScreen";
import PlaceOrderScreen from "./Components/Screens/PlaceOrderScreen";
import ProfileScreen from "./Components/Screens/ProfileScreen";
import EditProfileScreen from "./Components/Screens/EditProfileScreen";
import Information from "./Components/Profile/Information/Information";
import RoomInfoScreen from "./Components/Screens/RoomInfoScreen";
import IssuesScreen from "./Components/Screens/IssuesScreen";
import { AuthProvider, useAuth } from "./Components/Authentication/AuthContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import QRcodeReader from "./Components/Scanner/QRcodeReader";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./Components/Home/Home";
import Orders from "./Components/History/Orders/Orders";
import Payments from "./Components/History/Payments/Payments";
import Attendances from "./Components/History/Attendances/Attendances";
import Notices from "./Components/History/Message/Notices";
import Issues from "./Components/History/Message/Issues";
import MealBill from "./Components/Features/Payment/Meal/MealBill";
import SeatRent from "./Components/Features/Payment/Seat/SeatRent";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configFirebase";
const TopTabTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#e2e8f0",
  },
};
const Stack = createNativeStackNavigator();
const ProtectedStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const PaymentTab = createMaterialTopTabNavigator();
function PaymentScreen() {
  return (
    <PaymentTab.Navigator
      sceneContainerStyle={{ backgroundColor: "#042f2e" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Meal Bill") {
            iconName = focused ? (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Seat Rent") {
            iconName = (
              <MaterialCommunityIcons
                name="history"
                size={size}
                color={color}
              />
            );
          }
          return null;
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        },
        tabBarActiveTintColor: "#083344",
        tabBarInactiveTintColor: "gray",
        tabBarLabel: () => {
          let title;
          if (route.name === "Meal Bill") {
            title = <Text style={{ borderWidth: 0 }}>Meal</Text>;
          } else if (route.name === "Seat Rent") {
            title = <Text>Seat</Text>;
          }
          return title;
        },
        tabBarContentContainerStyle: {
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: -16,
          paddingTop: -8,
          paddingBottom: 8,
        },
      })}
    >
      <PaymentTab.Screen
        name="Meal Bill"
        options={{ headerShown: false }}
        component={MealBill}
      />
      <PaymentTab.Screen name="Seat Rent" component={SeatRent} />
    </PaymentTab.Navigator>
  );
}
function HistoryScreen() {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Orders") {
            iconName = focused ? (
              <MaterialCommunityIcons name="food" size={18.4} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="food-outline"
                size={16}
                color={color}
              />
            );
          } else if (route.name === "Payment") {
            iconName = (
              <MaterialIcons name="payment" size={18.4} color={color} />
            );
          } else if (route.name === "Attendance") {
            iconName = focused ? (
              <Ionicons name="list-sharp" size={18.4} color={color} />
            ) : (
              <Ionicons name="list-outline" size={18.4} color={color} />
            );
          } else if (route.name === "Messages") {
            iconName = focused ? (
              <MaterialCommunityIcons
                name="message-text"
                size={18.4}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={18.4}
                color={color}
              />
            );
          } else if (route.name === "Notices") {
            iconName = focused ? (
              <Ionicons name="notifications-sharp" size={18.4} color={color} />
            ) : (
              <Ionicons
                name="notifications-outline"
                size={18.4}
                color={color}
              />
            );
          }
          return iconName;
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          paddingTop: 4,
        },
        tabBarActiveTintColor: "#0369a1",
        tabBarInactiveTintColor: "gray",
        tabBarLabel: () => {
          return null;
        },
      })}
    >
      <TopTab.Screen
        name="Orders"
        options={{ headerShown: false }}
        component={Orders}
      />
      <TopTab.Screen name="Payment" component={Payments} />
      <TopTab.Screen name="Attendance" component={Attendances} />
      <TopTab.Screen name="Notices" component={Notices} />
      <TopTab.Screen name="Messages" component={Issues} />
    </TopTab.Navigator>
  );
}
function HomeScreen() {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Browse History") {
            iconName = (
              <MaterialCommunityIcons
                name="history"
                size={size}
                color={color}
              />
            );
          }
          return iconName;
        },
        tabBarStyle: {
          backgroundColor: "#0f172a",
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
      })}
    >
      <BottomTab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <BottomTab.Screen
        options={{
          headerStyle: {
            backgroundColor: "#1e293b",
          },
          headerTintColor: "#d1d5db",
        }}
        name="Browse History"
        component={HistoryScreen}
      />
    </BottomTab.Navigator>
  );
}
function Protected() {
  return (
    <ProtectedStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#155e75",
        },
        headerTintColor: "#fff",
      }}
    >
      <ProtectedStack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <ProtectedStack.Screen name="Place Order" component={PlaceOrderScreen} />
      <ProtectedStack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#083344",
          },
          headerTintColor: "#fff",
        }}
        name="Make Payment"
        component={PaymentScreen}
      />
      <ProtectedStack.Screen name="Post Issues" component={IssuesScreen} />
      <ProtectedStack.Screen name="Profile" component={ProfileScreen} />
      <ProtectedStack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
      />
      <ProtectedStack.Screen name="History" component={EditProfileScreen} />
      <ProtectedStack.Screen name="Room Info" component={RoomInfoScreen} />
      <ProtectedStack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
        }}
        name="Information"
        component={Information}
      />
      <ProtectedStack.Screen name="Scan QR Code" component={QRcodeReader} />
    </ProtectedStack.Navigator>
  );
}
function AppLayOut() {
  const { authState } = useAuth();
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setAuthenticated(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {authState?.token && authenticated ? (
          <Stack.Screen
            name="Protected"
            options={{ headerShown: false }}
            component={Protected}
          />
        ) : (
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    // <QRcodeReader/>
    <AuthProvider>
      <AppLayOut />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
