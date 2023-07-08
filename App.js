import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Components/Screens/LoginScreen';
import HomeScreen from './Components/Screens/HomeScreen';
import PlaceOrderScreen from './Components/Screens/PlaceOrderScreen';
import PaymentScreen from './Components/Screens/PaymentScreen';
import ProfileScreen from './Components/Screens/ProfileScreen';
import EditProfileScreen from './Components/Screens/EditProfileScreen';
import Information from './Components/Profile/Information/Information';
import RoomInfoScreen from './Components/Screens/RoomInfoScreen';
import IssuesScreen from './Components/Screens/IssuesScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={{headerShown:false}} component={LoginScreen}/>
        <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name='Place Order' component={PlaceOrderScreen}/>
        <Stack.Screen name='Make Payment' component={PaymentScreen}/>
        <Stack.Screen name='Post Issues' component={IssuesScreen}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Edit Profile' component={EditProfileScreen}/>
        <Stack.Screen name='History' component={EditProfileScreen}/>
        <Stack.Screen name='Room Info' component={RoomInfoScreen}/>
        <Stack.Screen name='Information' component={Information}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
