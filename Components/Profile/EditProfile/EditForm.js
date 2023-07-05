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
          marginBottom: "1rem",
          width: "100%",
        }}
      >
        [To change Academic data, please contact Warden.]
      </Text>
      <View>
        <Text style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>
          Phone
        </Text>
        <TextInput
          style={styles.input}
          onChange={(e) => {
            setData({
              ...data,
              phone: e.target.value,
            });
          }}
          onBlur={() => {
            if (!data.phone.length)
              setData({
                ...data,
                phone: stored.phone,
              });
          }}
          placeholder={stored.phone}
        />
      </View>
      <View>
        <Text style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>
          Address
        </Text>
        <TextInput
          style={styles.input}
          onChange={(e) => {
            setData({
              ...data,
              address: e.target.value,
            });
          }}
          onBlur={() => {
            if (!data.address.length)
              setData({
                ...data,
                address: stored.address,
              });
          }}
          placeholder={stored.address}
        />
      </View>
      <View>
        <Text style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>
          District
        </Text>
        <TextInput
          style={styles.input}
          onChange={(e) => {
            setData({
              ...data,
              phone: e.target.value,
            });
          }}
          onBlur={() => {
            if (!data.phone.length)
              setData({
                ...data,
                phone: stored.phone,
              });
          }}
          placeholder={stored.district}
        />
      </View>
      <View>
        <Text style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>
          Thana
        </Text>
        <TextInput
          style={styles.input}
          onChange={(e) => {
            setData({
              ...data,
              phone: e.target.value,
            });
          }}
          onBlur={() => {
            if (!data.phone.length)
              setData({
                ...data,
                phone: stored.phone,
              });
          }}
          placeholder={stored.thana}
        />
      </View>
      {error}
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          color: "#0F766E",
          fontSize: "1rem",
          marginVertical: "1rem",
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
    marginTop: "3.5rem",
    padding: "1.5rem",
  },
  input: {
    border: "1px solid rgb(203, 213, 225)",
    marginBottom: "0.5rem",
    padding: "1rem",
    color: "rgb(100, 116, 139)",
  },
  error: {
    color: "red",
    marginTop: "1rem",
    paddingVertical: "1rem",
    fontSize: "1.15rem",
    textAlign: "center",
    width: "100%",
    backgroundColor: "rgb(254, 226, 226)",
  },
});
export default EditForm;
