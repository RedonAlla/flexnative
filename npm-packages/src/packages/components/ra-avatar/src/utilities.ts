/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-10 21:10:38
 * @ Description: Utilities functions used for Avatar component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { WHITE_COLOR } from "./constants";
import { FillMode } from "./props";


/**
 * Returns the background color based on the provided fill mode.
 *
 * @param color - The base color value.
 * @param ghostOpacity - The opacity value to be used when the fill mode is 'ghost'.
 * @param fillMode - The fill mode which determines how the background color is applied. 
 *                   It can be 'none', 'solid', or 'ghost'.
 * @returns The background color based on the fill mode.
 */
export function getBackgroundColor(color: ColorValue, ghostOpacity: string, fillMode?: FillMode): ColorValue {
  switch (fillMode) {
    case 'none':
      return 'transparent';

    case 'solid':
      return color;

    case 'ghost':
      return `${color.toString()}${ghostOpacity}`;
      
    default:
      return color;
  }
}

/**
 * Determines the appropriate text color based on the provided parameters.
 *
 * @param color - The color to evaluate.
 * @param fillMode - The fill mode to consider.
 * @param blackColor - The color value to use for black.
 * @param isLight - A boolean indicating if the theme is light.
 * @returns The calculated text color value.
 */
export function getTextColor(color: Color, fillMode: FillMode, blackColor: ColorValue, isLight: boolean): ColorValue {
  if(Boolean(color === 'light' || color === 'secondary'))
    return blackColor;

  return Boolean(isLight && color === 'default')
    ? blackColor
    : fillMode === 'solid'
      ? WHITE_COLOR
      : color
}