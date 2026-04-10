import { useThemeState } from "@flexnative/theme-context";
import React from "react";
import { ColorValue, StyleSheet, View } from "react-native";
import ColorItem from "./color-item";
import { ITEM_SIZE_MULTIPLIER } from "./constants";

type Props = {
  colors: { [key: string]: ColorValue };
  onSelect: (colorKey: string) => void;
};

export default function ColorOptions({ colors, onSelect }: Props) {
  const theme = useThemeState();
  const currentColor = theme.colors.primary!;

  return (
    <View style={[styles.wrapper, { gap: theme.spaces.xs }]}>
      {Object.keys(colors).map((key) => (
        <ColorItem
          key={key}
          size={theme.fontSize.xxl * ITEM_SIZE_MULTIPLIER}
          color={colors[key]}
          colorKey={key}
          colorScheme={theme.scheme}
          padding={theme.spaces.xxs}
          borderWidth={theme.borders.width.thick}
          isSelected={colors[key] === currentColor}
          onSelect={(key) => onSelect(key)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
