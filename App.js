import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import HomePage from "./Components/Home/HomePage";
import MainNavBar from "./Components/NavMenu/MainNavBar";

export default function App() {
  return (
    <View style={styles.body}>
      <HomePage />
      <MainNavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    display: "flex",
    position: "relative"
  },
});
