/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-15 20:01:31
 * @ Description: Utilities functions used for Button component.
 */

import { ColorValue } from "react-native";
import { Color } from "@flexnative/theme-context";

import { ButtonType } from "./props";
import { WHITE_COLOR } from "./constants";


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

export function getTextColorPressed(isDark: boolean, color: Color, colorValue: ColorValue, blackColor: ColorValue): ColorValue {
  return isDark
    ? (color === 'secondary' || color === 'light') ? blackColor : WHITE_COLOR
    : (color === 'default' || color === 'light') ? colorValue : WHITE_COLOR
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