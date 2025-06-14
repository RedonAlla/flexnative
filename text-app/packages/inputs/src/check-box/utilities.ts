/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-04-30 17:01:22
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 18:05:12
 * @ Description: This file provides utility functions for styling the CheckBox component.
 *                These functions calculate values for box shadow width, theme spacing, font size, line height, and icon color based on the provided size and theme settings.
 */

import { Color, FontSize, Sizes, Spaces } from "@flexnative/theme-context";
import { WHITE_COLOR } from "../../../../constants/colors";
import { ColorValue } from "react-native";
import { CheckType } from "./props";


/**
 * Determines the box shadow width based on the checkbox size.
 * @param {Sizes} - The size of the CheckBox component ('small', 'medium', or 'large').
 * @returns {string} The corresponding box shadow width in pixels.
 *   - 'small': '2px'
 *   - 'medium': '3px'
 *   - 'large': '4px'
 *   - default: '2px'
 */
export function getBoxShadowWidth(size: Sizes): string {
  switch (size) {
    case 'small':
      return '2px';
    case 'medium':
      return '3px';
    case 'large':
      return '4px'
    default:
      return '2px';
  }
}

/**
 * Retrieves the appropriate theme spacing key based on the checkbox size.
 * @param {Sizes} size - The size of the checkbox ('small', 'medium', or 'large').
 * @returns {Spaces} The corresponding theme spacing key.
 *   - 'small': 'xxs'
 *   - 'medium': 'xs'
 *   - 'large': 'sm'
 *   - default: 'xs'
 */
export function getThemeSpaceKey(size: Sizes): Spaces {
  switch (size) {
    case 'small':
      return 'xxs';
    case 'medium':
      return 'xs';
    case 'large':
      return 'sm'
    default:
      return 'xs';
  }
}

/**
 * Retrieves the appropriate font size key based on the checkbox size.
 *
 * @param {Sizes} size - The size of the checkbox ('small', 'medium', or 'large').
 * @returns {FontSize} The corresponding font size key.
 *   - 'small': 'sm'
 *   - 'medium': 'md'
 *   - 'large': 'lg'
 *   - default: 'md'
 */
export function getFontSizeKey(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    case 'large':
      return 'lg'
    default:
      return 'md';
  }
}

/**
 * Retrieves the appropriate line height key based on the checkbox size.
 *
 * @param {Sizes} size - The size of the checkbox ('small', 'medium', or 'large').
 * @returns {FontSize} The corresponding line height key.
 *   - 'small': 'md'
 *   - 'medium': 'lg'
 *   - 'large': 'xxl'
 *   - default: 'xxl'
 */
export function getLineHeightKey(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'md';
    case 'medium':
      return 'lg';
    case 'large':
      return 'xxl'
    default:
      return 'xxl';
  }
}

/**
 * Determines the icon color based on theme settings, checkbox color, type, and whether the theme is dark.
 *
 * @param {boolean} isDark - Indicates if the current theme is dark.
 * @param {Color} color - The color of the checkbox (can be a theme color or a custom color).
 * @param {ColorValue} colorValue - The resolved color value (if `color` is a theme color).
 * @param {CheckType} type - The type of the checkbox ('default', 'outlined', 'solid', or 'ghost').
 * @param {ColorValue} blackColor - The color value for black in the current theme.
 * @returns {ColorValue} The appropriate color value for the checkbox icon.
 *
 * @remarks
 * The logic for determining the icon color varies based on the checkbox `type` and the theme's darkness (`isDark`).
 * For 'default' and 'solid' types, the icon color is white if the checkbox color is 'light' or 'default' in a light theme,
 * or if the checkbox color is 'secondary' or 'light' in a dark theme. Otherwise, it's black.
 * For other types ('outlined' and 'ghost'), the icon color is white if the theme is dark and the checkbox color is 'default', 'light', or 'dark';
 * otherwise, it's the resolved `colorValue`. If the theme is light, the icon color is black if the checkbox color is 'default' or 'light';
 * otherwise, it's the resolved `colorValue`.
 */
export function getIconColor(isDark: boolean, color: Color, colorValue: ColorValue, type: CheckType, blackColor: ColorValue): ColorValue {
  if(type === 'default' || type === 'solid') {
    if((!isDark && (color === 'light' || color === 'default')) || (isDark && (color === 'secondary' || color === 'light')))
      return blackColor;
    else
      return WHITE_COLOR;
  }
  
  return isDark
    ? (color === 'default' || color === 'light' || color === 'dark') ? WHITE_COLOR : colorValue
    : (color === 'default' || color === 'light') ? blackColor : colorValue;
}