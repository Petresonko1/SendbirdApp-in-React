import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Color, Border } from "../GlobalStyles";

const Property1menuStatusnor = ({ dimensionCode }) => {
  return (
    <View style={styles.property1menuStatusnor}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={dimensionCode}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.frameLayout} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 1,
    backgroundColor: Color.grayGray200,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  vectorIcon: {
    height: "70%",
    width: "70%",
    top: "15%",
    right: "15%",
    bottom: "15%",
    left: "15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  frameItem: {
    marginTop: 5,
  },
  rectangleParent: {
    marginTop: -6.5,
    marginLeft: -8.5,
    top: "50%",
    left: "50%",
    width: 17,
    position: "absolute",
  },
  property1menuStatusnor: {
    width: 40,
    height: 40,
  },
});

export default Property1menuStatusnor;
