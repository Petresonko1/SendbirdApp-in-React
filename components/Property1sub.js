import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1sub = ({ showFrameView, property1sub02Position }) => {
  const property1sub02Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1sub02Position),
    };
  }, [property1sub02Position]);

  return (
    <View
      style={[
        styles.property1sub02,
        styles.property1sub02FlexBox,
        property1sub02Style,
      ]}
    >
      <Image
        style={styles.btcon40Icon}
        contentFit="cover"
        source={require("../assets/btcon-40.png")}
      />
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>강남스팟</Text>
        {showFrameView && (
          <View style={[styles.iconthinclockParent, styles.parentFlexBox]}>
            <Image
              style={styles.iconthinclock}
              contentFit="cover"
              source={require("../assets/iconthinclock.png")}
            />
            <Text style={[styles.text1, styles.textTypo]}>09:32</Text>
          </View>
        )}
      </View>
      <View style={styles.property1sub02Inner}>
        <View style={[styles.btcon40Wrapper, styles.property1sub02FlexBox]}>
          <View style={styles.btcon40Icon}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <View style={styles.rectangleParent}>
              <View style={styles.frameLayout} />
              <View style={[styles.frameItem, styles.frameLayout]} />
              <View style={[styles.frameItem, styles.frameLayout]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1sub02FlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.pretendard,
    letterSpacing: -1,
  },
  frameLayout: {
    height: 1,
    backgroundColor: Color.grayGray200,
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
  },
  btcon40Icon: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: FontSize.size_mini,
    lineHeight: 21,
    fontWeight: "500",
    color: Color.grayGray100,
  },
  iconthinclock: {
    width: 16,
    height: 16,
  },
  text1: {
    fontSize: FontSize.size_smi,
    lineHeight: 17,
    fontWeight: "300",
    color: Color.grayGray900,
    marginLeft: 2,
  },
  iconthinclockParent: {
    paddingRight: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  parent: {
    width: 167,
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
  btcon40Wrapper: {
    top: 0,
    right: 0,
    paddingRight: Padding.p_9xs,
    position: "absolute",
  },
  property1sub02Inner: {
    width: 44,
    height: 40,
  },
  property1sub02: {
    backgroundColor: Color.bg,
    width: 390,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_8xs,
  },
});

export default Property1sub;
