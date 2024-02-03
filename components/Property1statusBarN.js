import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1statusBarN = ({ property1statusBarNWidth, timeFontWeight }) => {
  const property1statusBarNStyle = useMemo(() => {
    return {
      ...getStyleValue("width", property1statusBarNWidth),
    };
  }, [property1statusBarNWidth]);

  const timeStyle = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", timeFontWeight),
    };
  }, [timeFontWeight]);

  return (
    <View style={[styles.property1statusBarN, property1statusBarNStyle]}>
      <Text style={[styles.time, styles.timePosition, timeStyle]}>9:41</Text>
      <View style={[styles.battery, styles.timePosition]}>
        <View style={[styles.border, styles.timePosition]} />
        <Image
          style={[styles.capIcon, styles.timePosition]}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={[styles.capacity, styles.timePosition]} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  time: {
    marginTop: -8,
    left: 16,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorWhite,
    textAlign: "center",
    width: 54,
  },
  border: {
    marginTop: -5.65,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    marginTop: -1.95,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    marginTop: -3.65,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorWhite,
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -4.7,
    right: 16,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  property1statusBarN: {
    width: 360,
    height: 46,
  },
});

export default Property1statusBarN;
