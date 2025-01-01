import { ColorValue } from "react-native";
import { FillMode } from "./props";
import { WHITE_COLOR } from "./constants";
import { Color } from "@flexnative/theme-context";

/**
 * Returns the appropriate background color based on the Message Fill mode.
 *
 * @param colorValue - The base color value.
 * @param ghostOpacity - The opacity value to be applied for fill mode ghost.
 * @param fillMode - The fill mode of the Message Box. Can be 'solid', or 'ghost'.
 * @returns The background color value based on the fill mode.
 */
export function getBackgroundColor(colorValue: ColorValue, ghostOpacity: string, fillMode: FillMode): ColorValue {
  if(fillMode === 'ghost')
    return `${colorValue.toString()}${ghostOpacity}`;
  
  return colorValue;
}

/**
* Determines the text color based on the provided parameters.
*
* @param {boolean} isLight - Indicates if the theme is light.
* @param {Color} color - The color type of the message component.
* @param {ColorValue} colorValue - The color value to be used.
* @param {FillMode} fill - Fill mode of component.
* @param {ColorValue} blackColor - The color value representing black.
* @returns {ColorValue} - The determined text color value.
*/
export function getTextColor(isLight: boolean, color: Color, colorValue: ColorValue, fill: FillMode, blackColor: ColorValue): ColorValue {
  if(!isLight && (color === 'default' || color === 'secondary' || color === 'dark' || color === 'light'))
    return WHITE_COLOR;

  if (color === 'light' || color === 'default')
    return blackColor;

  if (fill === 'solid' && Boolean(color === 'secondary'))
    return WHITE_COLOR;

  return Boolean(isLight && color === 'default')
    ? blackColor
    : fill === 'solid'
        ? WHITE_COLOR
        : colorValue;
}