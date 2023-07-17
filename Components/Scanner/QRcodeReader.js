import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const QRcodeReader = () => {

  const [qrCode, setQRCode] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setQRCode(data)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.body}>
      <View style={styles.scannerBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      </View>

      {scanned && (
        <>
          <View style={{ padding: 8 }}>
            <Text style={{ color: "#fbbf24", fontSize: 18.4 }}>
              Scan successfull !!! {qrCode}
            </Text>
          </View>
          <Text style={styles.reScanBtn} onPress={() => setScanned(false)}>
            Tap to Scan Again
          </Text>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#134e4a",
    position: "relative",
    width: "100%",
    height: "100%",
    marginTop: 33.6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
  },
  scannerBox: {
    // padding: 8,
    borderWidth: 2,
    borderColor: "#115e59",
    width: 360,
    height: 360,
    // backgroundColor: "#ffffff",
    borderRadius: 18.4,
  },
  reScanBtn: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: "#115e59",
    backgroundColor: "#ffffff",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 9999,
    position: "absolute",
    bottom: 28,
  },
});
export default QRcodeReader;
