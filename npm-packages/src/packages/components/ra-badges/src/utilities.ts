/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-12 21:45:58
 * @ Description: Utilities functions use for Badge component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { BadgeType } from "./props";
import { WHITE_COLOR } from "./constants";


/**
 * Determines the appropriate text color based on the provided parameters.
 *
 * @param color - The color type of the badge.
 * @param colorValue - The color value to be used if conditions are met.
 * @param type - The type of the badge (e.g., solid).
 * @param blackColor - The color value to be used for black text.
 * @param isLight - A boolean indicating if the background is light.
 * @returns The appropriate color value for the text.
 */
export function getTextColor(color: Color, colorValue: ColorValue, type: BadgeType, blackColor: ColorValue, isLight: boolean, ): ColorValue {
  if(Boolean(color === 'light' || color === 'secondary'))
    return blackColor;

  return Boolean(isLight && color === 'default')
    ? blackColor
    : type === 'solid'
      ? WHITE_COLOR
      : colorValue
}

/**
 * Returns the background color for a badge based on the provided parameters.
 *
 * @param color - The base color of the badge.
 * @param ghostOpacity - The opacity value to be used when the badge type is 'ghost'.
 * @param type - (Optional) The type of the badge, which can be 'text', 'ghost', or other types.
 * @returns The computed background color for the badge.
 */
export function getBackgroundColor(color: Color, ghostOpacity: string, type?: BadgeType): ColorValue {
  switch (type) {
    case 'text':
      return 'transparent';

    case 'ghost':
      return `${color.toString()}${ghostOpacity}`;
      
    default:
      return color;
  }
}

/**
 * Checks if the given variable is a string.
 *
 * @param myVar - The variable to check.
 * @returns `true` if the variable is a string, otherwise `false`.
 */
export function isString(myVar: any): boolean {
  return (typeof myVar === 'string' || myVar instanceof String)
}