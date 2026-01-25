/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-13 20:56:56
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 20:30:19
 * @ Description: A Blur component use to header navigation.
 */

import React from "react";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { HEADER_BLUR_INTENSITY } from "@/constants/layout";


/**
 * Describes the shape of props accepted by the HeaderBackground component, specifically a boolean isLight.
 */
interface HeaderBackgroundProps {
  isDark: boolean;
}

/**
 * Functional component representing the background of a header.
 * Takes in props defined by HeaderBackgroundProps.
 * 
 * @param {HeaderBackgroundProps} param 
 * @returns {React.FC<HeaderBackgroundProps>} HeaderBackground
 */
export const HeaderBackground: React.FC<HeaderBackgroundProps> = ({ isDark }) => {
  
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
 * Importing StyleSheet from 'react-native' to create a centralized stylesheet.
 */
const styles = StyleSheet.create({
  blurView: {
    zIndex: -100,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
});