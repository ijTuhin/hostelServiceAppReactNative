import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Components/Screens/LoginScreen";
import HomeScreen from "./Components/Screens/HomeScreen";
import PlaceOrderScreen from "./Components/Screens/PlaceOrderScreen";
import PaymentScreen from "./Components/Screens/PaymentScreen";
import ProfileScreen from "./Components/Screens/ProfileScreen";
import EditProfileScreen from "./Components/Screens/EditProfileScreen";
import Information from "./Components/Profile/Information/Information";
import RoomInfoScreen from "./Components/Screens/RoomInfoScreen";
import IssuesScreen from "./Components/Screens/IssuesScreen";
import { AuthProvider, useAuth } from "./Components/Authentication/AuthContext";
const Stack = createNativeStackNavigator();
const ProtectedStack = createNativeStackNavigator();
function Protected() {
  return (
    <ProtectedStack.Navigator>
      <ProtectedStack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <ProtectedStack.Screen name="Place Order" component={PlaceOrderScreen} />
      <ProtectedStack.Screen name="Make Payment" component={PaymentScreen} />
      <ProtectedStack.Screen name="Post Issues" component={IssuesScreen} />
      <ProtectedStack.Screen name="Profile" component={ProfileScreen} />
      <ProtectedStack.Screen
        name="Edit Profile"
        component={EditProfileScreen}
      />
      <ProtectedStack.Screen name="History" component={EditProfileScreen} />
      <ProtectedStack.Screen name="Room Info" component={RoomInfoScreen} />
      <ProtectedStack.Screen name="Information" component={Information} />
    </ProtectedStack.Navigator>
  );
}
function AppLayOut() {
  const { authState } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {authState?.authenticate ? (
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
