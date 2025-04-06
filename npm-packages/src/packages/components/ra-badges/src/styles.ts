/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-06 17:37:02
 * @ Description: Defines the styles for the Badge component using React Native's StyleSheet.
 */

import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { BaseColors, BaseTheme } from "@flexnative/theme-context";

import BadgedProps, { BadgePosition, Position } from "./props";
import { POSITION } from "./constants";
import { getTextColor, getThemeFontSizeKey, getThemeSpaceKey, isString } from "./utilities";



/**
 * @interface BadgeStyles
 * @description Interface defining the structure of the styles for the Badge component.
 */
interface BadgeStyles {
  /**
   * @property {ViewStyle} container - Styles for the container of the badge.
   */
  container: ViewStyle;
  /**
   * @property {TextStyle} text - Styles for the text within the badge.
   */
  text: TextStyle;
}

/**
 * Generates styles for the Badge component based on the provided theme and props.
 * 
 * @param {BaseTheme<BaseColors>} theme - The theme object containing colors, spaces, borders, and font sizes.
 * @param {BadgedProps} props - The properties passed to the Badge component.
 * @returns {BadgeStyles} An object containing the styles for the badge container and text.
 * @example
 * // Example usage:
 * const theme = {
 *   colors: { primary: 'blue', secondary: 'gray', black: 'black', white: 'white' },
 *   spaces: { small: 4, medium: 8, large: 12 },
 *   borders: {
 *     radius: { full: 999, rounded: 8, none: 0 },
 *     width: { none: 0, thin: 1, medium: 2, thick: 4 },
 *   },
 *   fontSize: { small: 12, medium: 14, large: 16 },
 *   isDark: false,
 * };
 * const props = {
 *   size: 'medium',
 *   color: 'primary',
 *   textColor: 'white',
 *   radius: 'full',
 *   borderWidth: 'thin',
 *   borderColor: 'blue',
 *   type: 'solid',
 *   position: 'top-right',
 * };
 * const styles = badgeStyle(theme, props);
*/
export default (
  theme: BaseTheme<BaseColors>,
  props: BadgedProps
): BadgeStyles => {
  const {
    size,
    color,
    textColor,
    radius,
    borderWidth,
    borderColor,
    type,
    position,
  } = props;

  const themeColor = theme.colors[color as keyof BaseColors] ?? color;

  return StyleSheet.create({
    container: {
      position: 'relative'
    },
    text: {
      position: 'absolute',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: theme.spaces[getThemeSpaceKey(size!)],
      backgroundColor: themeColor,
      borderColor: borderColor ?? themeColor,
      color: textColor ?? getTextColor(theme.isDark, color!, themeColor, type!, theme.colors.black),
      fontSize: theme.fontSize[getThemeFontSizeKey(size!)],
      borderRadius: theme.borders?.radius![radius!] ?? radius,
      borderWidth: theme.borders?.width![borderWidth!] ?? borderWidth,
      fontFamily: 'Regular',
      ...(isString(position) ? POSITION[position as BadgePosition] : position as Position),
    }
  });
};