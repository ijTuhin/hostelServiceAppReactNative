import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  const logo = require("../../assets/IIUClogo.jpg");
  return (
    <View style={styles.body}>
      {/* <Image
        style={{ width: 50, height: 50, resizeMode: "cover" }}
        source={logo}
      /> */}
      {/* <Text
        style={{
          fontSize: 32,
          fontStyle: "italic",
          marginBottom: 32,
        }}
      >
        Ostello App
      </Text> */}
      <View style={styles.top}>
        <Text style={{ /* color:"", */ fontSize: 32 }}>
          Welcome, Sign in to your Account
        </Text>
        <Text
          style={{
            /* color:"", */ fontSize: 16,
            fontStyle: "italic",
            marginVertical: 4,
          }}
        >
          Female Hostel Service
        </Text>
      </View>
      <LoginForm />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    marginTop: 28,
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
    // position: "relative",
    width: "100%",
  },
  //   top: { backgroundColor: "#134e4a", height: "35%", paddingHorizontal:32, display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center" },
  top: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 24
  },
});
export default LoginScreen;

/* import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.top}>
        <Text style={{color:"rgb(251, 191, 36)", fontSize:32}}>Welcome, Sign in to your Account</Text>
        <Text style={{color:"#fff", fontSize:20, fontStyle:"italic", marginVertical:4}}>Female Hostel Service</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    marginTop: 388,
    flex: 1,
    backgroundColor: "#fff",
    // display: "flex",
    position: "relative",
    // width: "100%",
  },
//   top: { backgroundColor: "#134e4a", height: "35%", paddingHorizontal:32, display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center" },
  top: { backgroundColor: "#134e4a", height: "100%", borderBottomLeftRadius:0, borderBottomRightRadius:1000,paddingHorizontal:32, display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"center", position:"absolute", width:"100%", top:-360, right:6.4 },
});
export default LoginScreen;
 */
