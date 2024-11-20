/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-20 22:58:41
 * @ Description: Utilities functions used for Button component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { ButtonType } from "./props";
import { WHITE_COLOR } from "./constants";


/**
 * Returns the appropriate background color based on the button type.
 *
 * @param colorValue - The base color value.
 * @param ghostOpacity - The opacity value to be applied for ghost buttons.
 * @param type - The type of the button. Can be 'default', 'ghost', 'inverse', 'link', or 'text'.
 * @returns The background color value based on the button type.
 */
export function getBackgroundColor(colorValue: ColorValue, ghostOpacity: string, type: ButtonType): ColorValue {
  switch (type) {
    case 'default':
      return colorValue;

    case 'ghost':
      return `${colorValue.toString()}${ghostOpacity}`;

    case 'inverse':
    case 'link':
    case 'text':
      return 'transparent';
      
    default:
      return colorValue;
  }
}

/**
 * Determines the text color based on the provided parameters.
 *
 * @param {boolean} isLight - Indicates if the theme is light.
 * @param {Color} color - The color type of the button.
 * @param {ColorValue} colorValue - The color value to be used.
 * @param {ButtonType} buttonType - The type of the button.
 * @param {ColorValue} blackColor - The color value representing black.
 * @returns {ColorValue} - The determined text color value.
 */
export function getTextColor(isLight: boolean, color: Color, colorValue: ColorValue, buttonType: ButtonType, blackColor: ColorValue): ColorValue {
  if(Boolean(color === 'light'))
    return blackColor;

  if(Boolean(color === 'secondary'))
    return WHITE_COLOR;

  return Boolean(isLight && color === 'default')
    ? blackColor
    : buttonType === 'default'
      ? WHITE_COLOR
      : colorValue
}

/**
 * Returns the appropriate overlay color based on the button type and provided color values.
 *
 * @param {ButtonType} type - The type of the button. Can be 'default', 'ghost', 'inverse', 'link', or 'text'.
 * @param {ColorValue} color - The base color value of the button.
 * @param {ColorValue} overlay - The overlay color value to be used for 'default' button type.
 * @param {string} ghostOpacity - The opacity value to be applied to the color for 'ghost' and 'text' button types.
 * @returns {ColorValue} - The resulting overlay color based on the button type and provided color values.
 */
export function getOverlayColor(type: ButtonType, color: Color, overlay: ColorValue, ghostOpacity: string): ColorValue {
  if(type === 'default')
    return overlay;

  switch (type) {
    case 'inverse':
      return color;

    case 'ghost':
    case 'link':
    case 'text':
      return `${color.toString()}${ghostOpacity}`;
      
    default:
      return color;
  }
}

/**
 * Check if a value it is a string or not.
 * 
 * @param value 
 * @returns true if value it is string otherwise false.
 */
export function isString<Type>(value?: Type): boolean {
  return typeof value === 'string';
}