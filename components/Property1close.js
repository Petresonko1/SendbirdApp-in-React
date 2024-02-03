import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1close = ({
  property1closePosition,
  property1closeMarginLeft,
  property1closeBottom,
  property1closeLeft,
  property1closeWidth,
}) => {
  const property1closeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1closePosition),
      ...getStyleValue("marginLeft", property1closeMarginLeft),
      ...getStyleValue("bottom", property1closeBottom),
      ...getStyleValue("left", property1closeLeft),
      ...getStyleValue("width", property1closeWidth),
    };
  }, [
    property1closePosition,
    property1closeMarginLeft,
    property1closeBottom,
    property1closeLeft,
    property1closeWidth,
  ]);

  return (
    <View style={[styles.property1closeFlexBox, property1closeStyle]}>
      <View style={[styles.sendAMessagePrompt, styles.inputSpaceBlock]}>
        <View style={styles.sendMessageInput}>
          <View style={styles.btcon40Parent}>
            <Image
              style={styles.btcon40Icon}
              contentFit="cover"
              source={require("../assets/btcon-401.png")}
            />
            <View style={styles.btcon40Parent}>
              <View style={styles.btcon40Parent}>
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
          </View>
        </View>
      </View>
      <View style={styles.property1closeChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputSpaceBlock: {
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
  },
  inputFlexBox: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  btcon40Icon: {
    width: 40,
    height: 40,
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
    paddingRight: Padding.p_xs,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
  },
  btcon40Parent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  sendMessageInput: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  sendAMessagePrompt: {
    paddingLeft: Padding.p_9xs,
    paddingRight: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    backgroundColor: Color.blackBlack900,
  },
  property1closeChild: {
    height: 24,
    width: 390,
    backgroundColor: Color.blackBlack900,
  },
  property1closeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 390,
    backgroundColor: Color.blackBlack900,
  },
});

export default Property1close;
