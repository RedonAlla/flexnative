import React from "react";
import {
  ColorSchemeName,
  ColorValue,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { Slider } from "@flexnative/slider";
import { useThemeContext } from "@flexnative/theme-context";

import ColorOptions from "./color-options";
import ColorScheme from "./color-scheme";
import {
  CARD_BORDER_RADIUS,
  CARD_PADDING,
  CONTAINER_PADDING,
  colors as defaultColors,
  SESSION_PADDING,
  SLIDER_THUMB_RADIUS,
  SLIDER_THUMB_SIZE,
  SLIDER_TRACK_RADIUS,
  SLIDER_TRACK_SIZE,
} from "./constants";
import Divider from "./divider";
import Title from "./title";

type Props = {
  colors?: {
    [key: string]: ColorValue;
  };
};

export default function Index({ colors = defaultColors }: Props) {
  const {
    state: theme,
    setTheme,
    setColorScheme,
    setScale,
  } = useThemeContext();

  const handleColorSchemeChange = async (
    schema?: ColorSchemeName,
  ): Promise<void> => {
    if (!setColorScheme)
      throw new Error("setColorScheme it is not Implemented.");

    setColorScheme?.(schema);
  };

  const handleChangePrimaryColor = (key: keyof typeof colors) => {
    if (!setTheme) throw new Error("setTheme it is not Implemented.");

    setTheme!(key);
  };

  const handleScaleChange = (value: number) => {
    if (!setScale) throw new Error("setScale it is not Implemented.");

    setScale(value);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={[styles.session, { backgroundColor: theme.colors.card }]}>
        <Title text="Appearance" icon="light-dark" />
        <ColorScheme
          colorScheme={theme.scheme}
          primaryColor={theme.colors.primary}
          onColorSchemeChange={handleColorSchemeChange}
        />

        <Divider color={theme.colors.border} space={SESSION_PADDING} />

        <Title text="Accent color" icon="color-palete" />

        <ColorOptions
          colors={colors}
          onSelect={handleChangePrimaryColor}
        />
      </View>

      <View style={[styles.session, { backgroundColor: theme.colors.card }]}>
        <Title text="Screen zoom" icon="zoom-in" />
        <Slider
          hideSteps
          trackStyle={styles.sliderTrack}
          thumbStyle={styles.sliderThumb}
          value={theme.scale}
          step={0.5}
          minimumValue={1}
          maximumValue={2.5}
          onSlidingComplete={handleScaleChange}
          maximumTrackTintColor={theme.colors.background}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: CONTAINER_PADDING,
  },
  session: {
    padding: CARD_PADDING,
    marginBottom: CARD_PADDING,
    borderRadius: CARD_BORDER_RADIUS,
  },
  sliderTrack: {
    height: SLIDER_TRACK_SIZE,
    borderRadius: SLIDER_TRACK_RADIUS,
  },
  sliderThumb: {
    width: SLIDER_THUMB_SIZE,
    height: SLIDER_THUMB_SIZE,
    borderRadius: SLIDER_THUMB_RADIUS,
  },
});
