import React from "react";
import {
  ColorSchemeName,
  ColorValue,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

import { applyActiveColor } from "@flexnative/theme-context";

type Props = {
  isSelected: boolean;
  color: ColorValue;
  colorKey: string;
  colorScheme: ColorSchemeName;
  size: number;
  padding: number;
  borderWidth: number;
  onSelect: (colorKey: string) => void;
};

export default function ColorItem({
  isSelected,
  color,
  colorKey,
  colorScheme,
  size,
  padding,
  borderWidth,
  onSelect,
}: Props) {
  return (
    <Pressable
      role="radio"
      onPressIn={() => onSelect(colorKey)}
      style={[
        styles.wrapper,
        {
          width: size,
          height: size,
          padding: padding,
          borderRadius: size / 2,
          borderWidth: borderWidth,
          borderColor: isSelected ? color : "transparent",
        },
      ]}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.itemColor,
            {
              borderRadius: size / 2,

              backgroundColor: pressed
                ? applyActiveColor(color, colorScheme)
                : color,
            },
          ]}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  itemColor: {
    width: "100%",
    height: "100%",
  },
});
