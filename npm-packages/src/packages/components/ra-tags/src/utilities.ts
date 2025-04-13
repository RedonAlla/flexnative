/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-13 17:25:38
 * @ Description: Utility functions for the Tag component.
 */

import { ColorValue } from "react-native";
import { Color, FontSize, Sizes } from "@flexnative/theme-context";

import { TagType } from "./props";
import { WHITE_COLOR } from "./constants";


/**
 * Returns the theme font size key based on the provided size.
 *
 * This function maps the `Sizes` enum (small, medium, large) to the corresponding
 * `FontSize` keys used in the theme.
 *
 * @param {Sizes} [size='medium'] - The size of the tag component.
 * @returns {FontSize} The theme font size key.
 * @example
 * // Returns 'xs'
 * getThemeFontSizeKey('small');
 * @example
 * // Returns 'sm'
 * getThemeFontSizeKey('medium');
 * @example
 * // Returns 'md'
 * getThemeFontSizeKey('large');
 * @example
 * // Returns 'md'
 * getThemeFontSizeKey();
 */
export function getThemeFontSizeKey(size?: Sizes): FontSize
{
  switch (size) {
    case 'small':
      return 'xs';
    
    case 'medium':
      return 'sm';
      
    case 'large':
      return 'md';
  
    default:
      return 'md';
  }
}

/**
 * Returns the theme icon size key based on the provided size.
 *
 * This function maps the `Sizes` enum (small, medium, large) to the corresponding
 * `FontSize` keys used for icons in the theme.
 *
 * @param {Sizes} [size='medium'] - The size of the tag component.
 * @returns {FontSize} The theme font size key for icons.
 * @example
 * // Returns 'sm'
 * getThemeIconSizeKey('small');
 * @example
 * // Returns 'md'
 * getThemeIconSizeKey('medium');
 * @example
 * // Returns 'lg'
 * getThemeIconSizeKey('large');
 * @example
 * // Returns 'md'
 * getThemeIconSizeKey();
 */
export function getThemeIconSizeKey(size?: Sizes): FontSize
{
  switch (size) {
    case 'small':
      return 'sm';
    
    case 'medium':
      return 'md';
      
    case 'large':
      return 'lg';
  
    default:
      return 'md';
  }
}


/**
 * Determines the background color of the tag based on its fill mode and color.
 *
 * @param {TagType} fillMode - The fill mode of the tag ('text', 'solid', 'ghost').
 * @param {ColorValue} color - The primary color of the tag.
 * @param {ColorValue} ghostColor - The background color for ghost tags.
 * @returns {ColorValue} The calculated background color.
 * @example
 * // Returns 'transparent'
 * getBackgroundColor('text', 'blue', 'lightgray');
 * @example
 * // Returns 'blue'
 * getBackgroundColor('solid', 'blue', 'lightgray');
 * @example
 * // Returns 'lightgray'
 * getBackgroundColor('ghost', 'blue', 'lightgray');
 * @example
 * // Returns 'blue'
 * getBackgroundColor('invalid', 'blue', 'lightgray');
 */
export function getBackgroundColor(fillMode: TagType, color: ColorValue, ghostColor: ColorValue): ColorValue {
  switch (fillMode) {
    case 'text':
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
 * Determines the text color of the tag based on its theme, color, and type.
 *
 * @param {boolean} isDark - Whether the current theme is dark.
 * @param {Color} color - The color scheme of the tag.
 * @param {ColorValue} colorValue - The color value of the tag.
 * @param {TagType} type - The type of the tag ('text', 'solid', 'ghost').
 * @param {ColorValue} blackColor - The color value for black.
 * @returns {ColorValue} The calculated text color.
 * @example
 * // Returns '#FFFFFF' (white)
 * getTextColor(true, 'default', 'blue', 'solid', '#000000');
 * @example
 * // Returns '#000000' (black)
 * getTextColor(false, 'default', 'blue', 'solid', '#000000');
 * @example
 * // Returns 'blue'
 * getTextColor(false, 'primary', 'blue', 'solid', '#000000');
 * @example
 * // Returns 'blue'
 * getTextColor(true, 'primary', 'blue', 'ghost', '#000000');
 * @example
 * // Returns '#FFFFFF' (white)
 * getTextColor(true, 'light', 'blue', 'ghost', '#000000');
 */
export function getTextColor(isDark: boolean, color: Color, colorValue: ColorValue, type: TagType, blackColor: ColorValue): ColorValue {
  if(Boolean(type === 'solid')) {
    if((!isDark && (color === 'light' || color === 'default')) || (isDark && (color === 'secondary' || color === 'light')))
      return blackColor;
    else
      return WHITE_COLOR;
  }
  
  return isDark
    ? (color === 'default' || color === 'light' || color === 'dark') ? WHITE_COLOR : colorValue
    : (color === 'default' || color === 'light') ? blackColor : colorValue;
}