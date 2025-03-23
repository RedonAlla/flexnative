/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-23 17:50:40
 * @ Description: Utilities functions used for Avatar component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { WHITE_COLOR } from "./constants";
import { FillMode } from "./props";


/**
 * Determines the background color of an Avatar based on its fill mode and color properties.
 *
 * @param {FillMode} fillMode - The fill mode of the avatar ('solid', 'none', or 'ghost').
 * @param {ColorValue} color - The primary color of the avatar.
 * @param {ColorValue} ghostColor - The ghost color of the avatar (used when fillMode is 'ghost').
 * @returns {ColorValue} The calculated background color for the avatar.
 *
 * @example
 * // Returns 'transparent'
 * getBackgroundColor('none', 'blue', 'lightblue');
 *
 * @example
 * // Returns 'blue'
 * getBackgroundColor('solid', 'blue', 'lightblue');
 *
 * @example
 * // Returns 'lightblue'
 * getBackgroundColor('ghost', 'blue', 'lightblue');
 *
 * @example
 * // Returns 'blue'
 * getBackgroundColor('invalid', 'blue', 'lightblue');
 */
export function getBackgroundColor(fillMode: FillMode, color: ColorValue, ghostColor: ColorValue): ColorValue {
  switch (fillMode) {
    case 'none':
      return 'transparent';

    case 'solid':
      return color;

    case 'ghost':
      return ghostColor;
      
    default:
      return color;
  }
}


/**
 * Determines the text color of an Avatar based on the theme's darkness, the avatar's color, fill mode, and other color values.
 *
 * @param {boolean} isDark - Indicates whether the current theme is dark.
 * @param {Color} color - The color of the avatar (e.g., 'primary', 'secondary', 'light', 'dark', 'default').
 * @param {ColorValue} colorValue - The actual color value corresponding to the `color` property.
 * @param {FillMode} fillMode - The fill mode of the avatar ('solid', 'none', or 'ghost').
 * @param {ColorValue} blackColor - The color value for black.
 * @returns {ColorValue} The calculated text color for the avatar.
 *
 * @example
 * // Assuming isDark is false, color is 'light', fillMode is 'solid'
 * // Returns blackColor
 * getTextColor(false, 'light', 'red', 'solid', 'black');
 *
 * @example
 * // Assuming isDark is true, color is 'secondary', fillMode is 'solid'
 * // Returns WHITE_COLOR
 * getTextColor(true, 'secondary', 'red', 'solid', 'black');
 *
 * @example
 * // Assuming isDark is false, color is 'primary', fillMode is 'none'
 * // Returns 'red'
 * getTextColor(false, 'primary', 'red', 'none', 'black');
 *
 * @example
 * // Assuming isDark is true, color is 'default', fillMode is 'none'
 * // Returns WHITE_COLOR
 * getTextColor(true, 'default', 'red', 'none', 'black');
 */
export function getTextColor(isDark: boolean, color: Color, colorValue: ColorValue, fillMode: FillMode, blackColor: ColorValue): ColorValue {
  if(Boolean(fillMode === 'solid')) {
    if((!isDark && (color === 'light' || color === 'default')) || (isDark && (color === 'secondary' || color === 'light')))
      return blackColor;
    else
      return WHITE_COLOR;
  }
  
  return isDark
    ? (color === 'default' || color === 'light' || color === 'dark') ? WHITE_COLOR : colorValue
    : (color === 'default' || color === 'light') ? blackColor : colorValue;
}