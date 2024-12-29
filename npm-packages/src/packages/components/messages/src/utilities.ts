import { ColorValue } from "react-native";
import { FillMode } from "./props";

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