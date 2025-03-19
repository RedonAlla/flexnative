/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-19 22:11:34
 * @ Description: Utilities functions used for Avatar component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { WHITE_COLOR } from "./constants";
import { FillMode } from "./props";

export function getBackgroundColor(fillMode: FillMode, color: ColorValue, ghostColor: ColorValue): ColorValue {
  switch (fillMode) {
    case 'none':
      return 'transparent';

    case 'solid':
      return color;

    case 'ghost':
      return ghostColor;
      
    default:
      return color;
  }
}


export function getTextColor(isDark: boolean, color: Color, colorValue: ColorValue, fillMode: FillMode, blackColor: ColorValue): ColorValue {
  if(Boolean(fillMode === 'solid')) {
    if((!isDark && (color === 'light' || color === 'default')) || (isDark && (color === 'secondary' || color === 'light')))
      return blackColor;
    else
      return WHITE_COLOR;
  }
  
  return isDark
    ? (color === 'default' || color === 'light' || color === 'dark') ? WHITE_COLOR : colorValue
    : (color === 'default' || color === 'light') ? blackColor : colorValue;
}