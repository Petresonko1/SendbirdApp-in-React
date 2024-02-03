import * as React from "react";
import { StyleSheet, View } from "react-native";
import SectionCard from "../components/SectionCard";
import Property1close from "../components/Property1close";
import { Color } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <SectionCard />
      <Property1close
        property1closePosition="absolute"
        property1closeMarginLeft={-195}
        property1closeBottom={0}
        property1closeLeft="50%"
        property1closeWidth={390}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Frame;
