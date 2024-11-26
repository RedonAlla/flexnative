/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-24 23:49:16
 * @ Description: Utilities methods for Tag component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { TagType } from "./props";
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
export function getTextColor(color: Color, colorValue: ColorValue, type: TagType, blackColor: ColorValue, isLight: boolean): ColorValue {
 if(Boolean(color === 'light'))
   return blackColor;

 if(Boolean(color === 'secondary'))
  return WHITE_COLOR;

 return Boolean(isLight && color === 'default')
   ? blackColor
   : type === 'default'
     ? WHITE_COLOR
     : colorValue
}

/**
 * Returns the appropriate background color based on the button type.
 *
 * @param colorValue - The base color value.
 * @param ghostOpacity - The opacity value to be applied for ghost buttons.
 * @param type - The type of the button. Can be 'default', 'ghost', 'inverse', 'link', or 'text'.
 * @returns The background color value based on the button type.
 */
export function getBackgroundColor(colorValue: ColorValue, ghostOpacity: string, type: TagType): ColorValue {
  switch (type) {
    case 'default':
      return colorValue;

    case 'ghost':
      return `${colorValue.toString()}${ghostOpacity}`;
    case 'text':
      return 'transparent';
      
    default:
      return colorValue;
  }
}