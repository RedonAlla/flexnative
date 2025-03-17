/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-18 00:18:36
 * @ Description: This module provides utility functions specifically designed for the `Button` component.
 *              These functions assist in calculating text colors, icon sizes, applying dynamic styles,
 *              and determining box shadow widths based on button properties and the theme context.
 */

import { ColorValue, StyleProp, TextStyle } from "react-native";
import { Color, FontSize, Sizes } from "@flexnative/theme-context";

import { ButtonType } from "./props";
import { WHITE_COLOR } from "./constants";


/**
 * Determines the appropriate text color for a button based on the current theme (dark or light), the button's color, type, and the black color from the theme.
 * @function getTextColor
 * @param {boolean} isDark - Indicates if the current theme is dark.
 * @param {Color} color - The button's color, as defined in the theme.
 * @param {ColorValue} colorValue - The resolved color value from the theme or a custom color.
 * @param {ButtonType} buttonType - The type of the button (e.g., 'default', 'ghost', 'inverse').
 * @param {ColorValue} blackColor - The black color value from the theme.
 * @returns {ColorValue} The appropriate text color for the button.
 * @example
 * ```typescript
 * const textColor = getTextColor(true, 'primary', '#EA5A51', 'default', '#000'); // Returns '#FFFFFF' (white)
 * const textColor2 = getTextColor(false, 'light', '#fafafa', 'default', '#000'); //Returns '#000' (black)
 * ```
 */
export function getTextColor(isDark: boolean, color: Color, colorValue: ColorValue, buttonType: ButtonType, blackColor: ColorValue): ColorValue {
  if(Boolean(buttonType === 'default')) {
    if((!isDark && (color === 'light' || color === 'default')) || (isDark && (color === 'secondary' || color === 'light')))
      return blackColor;
    else
      return WHITE_COLOR;
  }
  
  return isDark
    ? (color === 'default' || color === 'light' || color === 'dark') ? WHITE_COLOR : colorValue
    : (color === 'default' || color === 'light') ? blackColor : colorValue;
}

/**
 * Determines the text color for a button when it's in a pressed state, considering the theme, button color, and theme's black color.
 * @param {boolean} isDark - Indicates if the current theme is dark.
 * @param {Color} color - The button's color.
 * @param {ColorValue} colorValue - The resolved color value from the theme or a custom color.
 * @param {ColorValue} blackColor - The black color value from the theme.
 * @returns {ColorValue} The text color for the button in the pressed state.
 * @example
 * ```typescript
 * const pressedTextColor = getTextColorPressed(true, 'primary', '#EA5A51', '#000'); // Returns '#FFFFFF' (white)
 * const pressedTextColor2 = getTextColorPressed(false, 'default', '#f5f5f5', '#000'); // Returns '#f5f5f5' (default color)
 * ```
 */
export function getTextColorPressed(isDark: boolean, color: Color, colorValue: ColorValue, blackColor: ColorValue): ColorValue {
  return isDark
    ? (color === 'secondary' || color === 'light') ? blackColor : WHITE_COLOR
    : (color === 'default' || color === 'light') ? colorValue : WHITE_COLOR
}

/**
 * Applies either static styles or dynamically generated styles based on the pressed state of the button.
 * @param {StyleProp<TextStyle> | ((pressed: boolean) => StyleProp<TextStyle>)} style - Either a static style object or a function that returns a style object based on the pressed state.
 * @param {boolean} pressed - Indicates if the button is currently pressed.
 * @returns {StyleProp<TextStyle>} The resolved style object to apply to the button.
 * @example
 * ```typescript
 * const staticStyle = { fontWeight: 'bold' };
 * const dynamicStyle = (pressed) => ({ color: pressed ? 'blue' : 'black' });
 * const appliedStyle = getStyle(staticStyle, false); // Returns { fontWeight: 'bold' }
 * const pressedAppliedStyle = getStyle(dynamicStyle, true); // Returns { color: 'blue' }
 * const unPressedAppliedStyle = getStyle(dynamicStyle, false); // Returns { color: 'black' }
 * ```
 */
export function getStyle(
  style:
    | StyleProp<TextStyle>
    | ((pressed: boolean) => StyleProp<TextStyle>)
    | undefined,
    pressed: boolean): StyleProp<TextStyle> {
    if(style === undefined)
      return undefined;
    else
      return (typeof style === 'function') ? style(pressed) : style
}

/**
 * Determines the appropriate icon size (font size) for a button based on its overall size.
 * @param {Sizes} size - The size of the button (e.g., 'small', 'medium', 'large', or a custom number).
 * @returns {FontSize} The corresponding font size for the icon.
 * @example
 * ```typescript
 * const smallIconSize = getIconSize('small'); // Returns 'md'
 * const mediumIconSize = getIconSize('medium'); // Returns 'lg'
 * const largeIconSize = getIconSize('large'); // Returns 'xxl'
 * const customIconSize = getIconSize(20); // Returns 20
 * ```
 */
export function getIconSize(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'md';
    case 'medium':
      return 'lg';
    case 'large':
      return 'xxl'
    default:
      return size;
  }
}

/**
 * Determines the box shadow width for a button based on its size.
 * @param {Sizes} size - The size of the button.
 * @returns {string} The box shadow width as a string (e.g., '2px', '3px').
 * @example
 * ```typescript
 * const smallShadowWidth = getBoxShadowWidth('small'); // Returns '2px'
 * const mediumShadowWidth = getBoxShadowWidth('medium'); // Returns '3px'
 * const largeShadowWidth = getBoxShadowWidth('large'); // Returns '4px'
 * const customShadowWidth = getBoxShadowWidth(12); // Returns '2px'
 * ```
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