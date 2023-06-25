import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text
        style={{
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Changed many texts
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
