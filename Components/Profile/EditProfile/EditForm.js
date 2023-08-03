import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useAuth } from "../../Authentication/AuthContext";

const EditForm = ({navigation}) => {
  const { data, postEditProfileRequest } = useAuth();
  const stored = {
    address: data.user.address,
    thana: data.user.thana,
    district: data.user.district,
    phone: data.user.phone,
  };
  const [item, setItem] = React.useState(stored);
  const [error, setError] = React.useState(<></>);
  const uploadData = () => {
    postEditProfileRequest(item);
    navigation.navigate("Profile");
    setError(
      <>
        <Text
          style={[
            {
              color: "#4ade80",
              backgroundColor: "#dcfce7",
            },
            styles.warn,
          ]}
        >
          Request for Personal Info has been sent.
        </Text>
      </>
    );
  };
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
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>Phone</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setItem({
              ...item,
              phone: e,
            });
          }}
          onBlur={() => {
            if (item.phone.length === 0)
              setItem({
                ...item,
                phone: stored.phone,
              });
          }}
          placeholder={stored.phone}
          keyboardType="numeric"
        />
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setItem({
              ...item,
              address: e,
            });
          }}
          onBlur={() => {
            if (item.address.length === 0)
              setItem({
                ...item,
                address: stored.address,
              });
          }}
          placeholder={stored.address}
        />
      </View>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 16, marginBottom: 4 }}>District</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            setItem({
              ...item,
              district: e,
            });
          }}
          onBlur={() => {
            if (item.district.length === 0)
              setItem({
                ...item,
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
            setItem({
              ...item,
              thana: e,
            });
          }}
          onBlur={() => {
            if (item.thana.length === 0)
              setItem({
                ...item,
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
          color: "#164e63",
          fontSize: 14,
          marginVertical: 16,
        }}
        onPress={() => {
          if (JSON.stringify(stored) === JSON.stringify(item)) {
            setError(
              <>
                <Text
                  style={[
                    {
                      color: "rgb(239, 68, 68)",
                      backgroundColor: "rgb(254, 242, 242)",
                    },
                    styles.warn,
                  ]}
                >
                  No changes made!!!
                </Text>
              </>
            );
          } else {
            uploadData();
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
    marginTop: 40,
    paddingVertical: 24,
    paddingHorizontal: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgb(203, 213, 225)",
    marginBottom: 8,
    padding: 12,
    color: "rgb(100, 116, 139)",
  },
  warn: {
    marginTop: 16,
    paddingVertical: 16,
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    opacity: 0.75,
  },
});
export default EditForm;
