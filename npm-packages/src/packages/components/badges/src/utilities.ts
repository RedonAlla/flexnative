/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2026-04-21 23:23:08
 * @ Description: Utilities functions use for Badge component.
 */

import { ColorValue } from "react-native";
import { WHITE_COLOR } from "./constants";


export function getTextColor(isDark: boolean, colorKey: any, blackColor: ColorValue): any {
  if(isDark)
  {
    switch (colorKey)
    {
      case 'white':
      case 'text':
      case 'border':
      case 'placeholder':
      case 'light':
        return blackColor;
      default:
        return WHITE_COLOR;
    }
  }

  switch (colorKey)
  {
    case 'white':
    case 'default':
    case 'background':
    case 'card':
    case 'border':
    case 'light':
      return blackColor;
    default:
      return WHITE_COLOR;
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