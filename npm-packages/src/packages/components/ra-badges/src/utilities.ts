/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-11 22:43:15
 * @ Description: Utilities functions use for Badge component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { BadgeType } from "./props";
import { WHITE_COLOR } from "./constants";


/**
 * Determines the appropriate text color for a badge based on the provided parameters.
 *
 * @param color - The color of the badge.
 * @param type - The type of the badge.
 * @param blackColor - The color value to use for black text.
 * @param isLight - A boolean indicating if the badge is light-themed.
 * @returns The color value to be used for the text.
 */
export function getTextColor(color: Color, type: BadgeType, blackColor: ColorValue, isLight: boolean): ColorValue {
  if(Boolean(color === 'light' || color === 'secondary'))
    return blackColor;

  return Boolean(isLight && color === 'default')
    ? blackColor
    : type === 'default'
      ? WHITE_COLOR
      : color
}

/**
 * Returns the background color for a badge based on the provided parameters.
 *
 * @param color - The base color of the badge.
 * @param ghostOpacity - The opacity value to be used when the badge type is 'ghost'.
 * @param type - (Optional) The type of the badge, which can be 'text', 'ghost', or other types.
 * @param backgroundColor - (Optional) A specific background color to override the default behavior.
 * @returns The computed background color for the badge.
 */
export function getBackgroundColor(color: Color, ghostOpacity: string, type?: BadgeType, backgroundColor?: ColorValue): ColorValue {
  if(Boolean(backgroundColor))
      return backgroundColor!;

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