import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const EditForm = () => {
  const stored = {
    address: "address",
    thana: "thana",
    district: "district",
    phone: "phone",
  };
  const [data, setData] = React.useState(stored);
  const [error, setError] = React.useState(<></>);
  return (
    <View style={styles.body}>
      <Text
        style={{
          color: "rgb(148, 163, 184)",
          marginBottom: 16,
          width: "100%",
        }}
      >
        [To change Academic data, please contact Warden.]
      </Text>
      <View>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>Phone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setData({
              ...data,
              phone: e,
            });
            console.warn(data);
          }}
          onBlur={() => {
            if (data.phone.length === 0)
              setData({
                ...data,
                phone: stored.phone,
              });
            console.warn(data.phone.length);
          }}
          placeholder={stored.phone}
        />
      </View>
      <View>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setData({
              ...data,
              address: e.target.value,
            });
          }}
          onBlur={() => {
            if (data.address.length === 0)
              setData({
                ...data,
                address: stored.address,
              });
          }}
          placeholder={stored.address}
        />
      </View>
      <View>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>District</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setData({
              ...data,
              district: e.target.value,
            });
          }}
          onBlur={() => {
            if (data.district.length === 0)
              setData({
                ...data,
                district: stored.district,
              });
          }}
          placeholder={stored.district}
        />
      </View>
      <View>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>Thana</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setData({
              ...data,
              thana: e.target.value,
            });
          }}
          onBlur={() => {
            if (data.thana.length === 0)
              setData({
                ...data,
                thana: stored.thana,
              });
          }}
          placeholder={stored.thana}
        />
      </View>
      {error}
      <Text
        style={{
          textAlign: "center",
          fontWeight: 700,
          color: "#0F766E",
          fontSize: 14,
          marginVertical: 16,
        }}
        onPress={() => {
          if (JSON.stringify(stored) === JSON.stringify(data)) {
            setError(
              <>
                <Text style={styles.error}>No changes made!!!</Text>
              </>
            );
            console.log("No changes made");
          } else {
            // stored = data; for changing data in UI without using useState
            console.log(data);
            setError(<></>);
          }
        }}
      >
        Submit
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    marginTop: 56,
    padding: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgb(203, 213, 225)",
    marginBottom: 8,
    padding: 12,
    color: "rgb(100, 116, 139)",
  },
  error: {
    color: "rgb(239, 68, 68)",
    marginTop: 16,
    paddingVertical: 16,
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    backgroundColor: "rgb(254, 242, 242)",
    opacity:0.75
  },
});
export default EditForm;
