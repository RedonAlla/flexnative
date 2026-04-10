import { dark, light } from "@flexnative/theme-context";
import React from "react";
import {
  ColorSchemeName,
  ColorValue,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ITEM_GAP, PRESS_OPACITY } from "./constants";
import { SVGComponent, SVGComponentDiagonal } from "./svg-cards";

type ColorSchemeProps = {
  primaryColor: ColorValue;
  colorScheme: ColorSchemeName;
  onColorSchemeChange(schema?: ColorSchemeName): Promise<void>;
};

export default function ColorScheme(props: ColorSchemeProps) {
  const { primaryColor, colorScheme, onColorSchemeChange } = props;

  const getColor = (schemeColor: ColorValue) =>
    colorScheme === null ? primaryColor : schemeColor;

  return (
    <View style={styles.row}>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? PRESS_OPACITY : 1 },
          styles.col,
          styles.schema,
        ]}
        onPress={() => onColorSchemeChange("light")}
      >
        <SVGComponent
          stroke={colorScheme === "light" ? primaryColor : light.border}
          card={light.card}
          accentColor={primaryColor}
          secondaryColor={light.secondary}
          background={light.background}
        />
        <Text>Light</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? PRESS_OPACITY : 1 },
          styles.col,
          styles.schema,
        ]}
        onPress={() => onColorSchemeChange("dark")}
      >
        <SVGComponent
          stroke={colorScheme === "dark" ? primaryColor : dark.border}
          card={dark.card}
          accentColor={primaryColor}
          secondaryColor={dark.secondary}
          background={dark.background}
        />
        <Text>Dark</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? PRESS_OPACITY : 1 },
          styles.col,
          styles.schema,
        ]}
        onPress={() => onColorSchemeChange(null)}
      >
        <SVGComponentDiagonal
          stroke={getColor(light.border)}
          card={light.card}
          accentColor={primaryColor}
          secondaryColor={light.secondary}
          background={light.background}
          strokeDark={getColor(dark.border)}
          cardDark={dark.card}
          accentColorDark={primaryColor}
          secondaryColorDark={dark.secondary}
          backgroundDark={dark.background}
        />
        <Text>System</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: ITEM_GAP,
    backgroundColor: "transparent",
  },
  col: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  schema: {
    alignItems: "center",
  },
  schemaText: {},
});
