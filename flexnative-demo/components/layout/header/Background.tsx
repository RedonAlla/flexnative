/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-13 20:56:56
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-02 21:23:00
 * @ Description: A Blur component use to header navigation.
 */

import React from "react";
import { StyleSheet } from "react-native";
import { BlurView, BlurViewProps } from "expo-blur";
import { HEADER_BLUR_INTENSITY } from "@/constants/layout";


/**
 * @interface HeaderBackgroundProps
 * @description Extends the `BlurViewProps` from `expo-blur` to include a flag indicating if the dark mode is enabled.
 * @property {boolean} isDark - A boolean indicating whether the application is in dark mode.
 * @extends {BlurViewProps}
 */
interface HeaderBackgroundProps extends BlurViewProps {
  isDark?: boolean;
}

/**
 * Functional component representing the background of a header.
 * Takes in props defined by HeaderBackgroundProps.
 * 
 * @param {HeaderBackgroundProps} param 
 * @returns {React.FC<HeaderBackgroundProps>} HeaderBackground
 */
export const HeaderBackground: React.FC<HeaderBackgroundProps> = ({ isDark, tint }) => {

  const tintStyle = React.useMemo(
    () => ( isDark ? 'systemChromeMaterialDark' : 'systemThickMaterialLight' ),
    [isDark]
  );

  return (
    <BlurView
      intensity={HEADER_BLUR_INTENSITY}
      tint={tintStyle}
      blurReductionFactor={6}
      experimentalBlurMethod="dimezisBlurView"
      style={styles.blurView}
    />
  );
};

/**
 * Defines the styles for the HeaderBackground component's blur effect.
 */
const styles = StyleSheet.create({
  blurView: {
    zIndex: -100,
    ...StyleSheet.absoluteFillObject
  }
});