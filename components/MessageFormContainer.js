import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Typedefault from "./Typedefault";

const MessageFormContainer = () => {
  return (
    <View style={[styles.sendMessageInput, styles.btcon40ParentFlexBox]}>
      <View style={[styles.btcon40Parent, styles.btcon40ParentFlexBox]}>
        <Image
          style={styles.btcon40Icon}
          contentFit="cover"
          source={require("../assets/btcon-401.png")}
        />
        <Typedefault typedefaultPosition="unset" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btcon40ParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  btcon40Icon: {
    width: 40,
    height: 40,
  },
  btcon40Parent: {
    flex: 1,
  },
  sendMessageInput: {
    alignSelf: "stretch",
  },
});

export default MessageFormContainer;
