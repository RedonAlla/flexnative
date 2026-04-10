import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";

type Props = {
  color: ColorValue;
  space: number;
};

export default function Divider({ color, space }: Props) {
  return (
    <View
      style={[styles.line, { backgroundColor: color, marginVertical: space }]}
    ></View>
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    alignSelf: "stretch",
  },
});
