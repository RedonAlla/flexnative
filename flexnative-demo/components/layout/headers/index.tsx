import React from "react";
import { BlurView } from "expo-blur";
import { Platform, StyleSheet } from "react-native";

const BLUR_INTENSITY = Platform.OS === 'web' ? 60 : 45;//170;

export const HeaderBackground = React.memo((props: { isLight: boolean }) => (
  <BlurView
    intensity={BLUR_INTENSITY}
    tint={props.isLight ? 'light' : 'dark'}
    blurReductionFactor={8}
    experimentalBlurMethod='dimezisBlurView'
    style={{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'transparent'
    }}
  />
));