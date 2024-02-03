import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Property1statusBarN from "./Property1statusBarN";
import Property1sub from "./Property1sub";

const SectionCard = () => {
  return (
    <View style={styles.systemStatusBarParent}>
      <Property1statusBarN
        property1statusBarNWidth={390}
        timeFontWeight="unset"
      />
      <Property1sub showFrameView={false} property1sub02Position="unset" />
    </View>
  );
};

const styles = StyleSheet.create({
  systemStatusBarParent: {
    position: "absolute",
    top: 0,
    left: 0,
  },
});

export default SectionCard;
