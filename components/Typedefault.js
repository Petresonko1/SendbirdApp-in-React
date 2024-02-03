import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Typedefault = ({ typedefaultPosition }) => {
  const typedefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typedefaultPosition),
    };
  }, [typedefaultPosition]);

  return (
    <View style={[styles.typedefault, typedefaultStyle]}>
      <View style={styles.typedefaultInner}>
        <View style={styles.inputFlexBox}>
          <View style={[styles.input, styles.inputFlexBox]}>
            <Text style={styles.text}>메세지 보내기</Text>
            <Image
              style={styles.chatSendIcon}
              contentFit="cover"
              source={require("../assets/chat-send.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFlexBox: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: FontSize.size_sm,
    letterSpacing: -1,
    lineHeight: 24,
    fontFamily: FontFamily.pretendard,
    color: Color.grayGray900,
    textAlign: "left",
  },
  chatSendIcon: {
    borderRadius: Border.br_81xl,
    width: 24,
    height: 24,
  },
  input: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.blackBlack800,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray,
    borderWidth: 1,
    height: 48,
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_5xs,
  },
  typedefaultInner: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  typedefault: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
});

export default Typedefault;
