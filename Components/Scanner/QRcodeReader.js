import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useAuth } from "../Authentication/AuthContext";
import ScanSuccess from "./ScanSuccess";
import { checkMealTime } from "../Hooks/Conditions";
const QRcodeReader = ({ route, navigation }) => {
  const { confirmMealReceive, markAttendance, data } = useAuth();
  const { title, operate, type, text } = route.params;
  const [time, setTime] = useState({
    h: parseInt(new Date().getHours()),
    m: parseInt(new Date().getMinutes()),
    s: parseInt(new Date().getSeconds()),
  });
  // const [hasPermission, setHasPermission] = useState(null);
  const [error, setError] = useState(false);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    if (
      (type === "M" &&
        data.orders[0].meal === checkMealTime &&
        data.orders[0].status) ||
      (type === "M" &&
        data.orders[1].meal === checkMealTime &&
        data.orders[1].status)
    ) {
      setScanned(true);
      setError(true);
    }
    const interval = setInterval(() => {
      setTime({
        h: parseInt(new Date().getHours()),
        m: parseInt(new Date().getMinutes()),
        s: parseInt(new Date().getSeconds()),
      });
    }, 1000);
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      // setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
    return () => clearInterval(interval);
  }, [scanned, time]);

  const handleBarCodeScanned = ({ type, data }) => {
    if (data) {
      console.log(data);
      verifyQRcode(data);
    }
  };

  /* =================== Verify qrCode ==================== */
  const verifyQRcode = (data) => {
    const scanTime = {
      h: data.charCodeAt(0) - 35,
      m: data.charCodeAt(10) - 35,
      s: data.charCodeAt(6) - 35,
      item: data[24],
    };
    console.log(data, scanTime);
    if (scanTime.h === time.h) {
      if (scanTime.m === time.m) {
        setScanned(true);
        console.log("1. Got it - ", data, scanTime.item);
        if (scanTime.item === type && type === "A") {
          console.log(data, "Cond-1 Attendance Marked");
          markAttendance();
        } else if (scanTime.item === checkMealTime[0] && type === "M") {
          // confirmMealReceive();
          console.log(data, "Cond-1 Confirmed meal");
        } else setError(true);
      } else if (time.m + 1 === scanTime.m || scanTime.m + 1 === time.m) {
        setScanned(true);
        console.log("2. Got it - ", data, scanTime.item);
        if (scanTime.item === type && type === "A") {
          console.log(data, "Cond-2 Attendance Marked");
          markAttendance();
        } else if (scanTime.item === checkMealTime[0] && type === "M") {
          // confirmMealReceive();
          console.log(data, "Cond-2 Confirmed meal");
        } else setError(true);
      }
    } else {
      console.log(scanTime.h, time.h);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
      <View style={styles.body}>
        <Text style={[{ fontSize: 16, color: "white", paddingVertical: 12 }]}>
          {title}
        </Text>
        <View
          style={[
            styles.scannerBox,
            operate
              ? scanned
                ? {
                    backgroundColor: "#475569",
                  }
                : {
                    backgroundColor: "#94a3b8",
                  }
              : {
                  backgroundColor: "transparent",
                },
          ]}
        >
          {operate ? (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFill}
            />
          ) : (
            <ScanSuccess text={text} />
          )}
        </View>

        {scanned && (
          <>
            <Text
              style={[
                { fontSize: 18.4, padding: 8 },
                !error ? { color: "#14b8a6" } : { color: "#ef4444" },
              ]}
            >
              {!error
                ? `Scan successfull !!!`
                : "Wrong QR code detected!! Please scan correctly."}
            </Text>
            <Text
              style={styles.reScanBtn}
              onPress={() => {
                if (!error) {
                  navigation.navigate("Home");
                } else {
                  setScanned(false);
                  setError(false);
                }
              }}
            >
              {!error ? "Go Back" : "Tap to Scan Again"}
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#020617",
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 8,
  },
  scannerBox: {
    borderWidth: 2,
    borderColor: "#115e59",
    width: 280,
    height: 420,
    borderRadius: 18.4,
  },
  reScanBtn: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#0e7490",
    backgroundColor: "#0e7490",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 9999,
    position: "absolute",
    bottom: 28,
    color: "#ddd",
  },
});
export default QRcodeReader;
