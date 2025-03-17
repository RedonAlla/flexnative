/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-17 23:22:15
 * @ Description: Utilities functions used for Button component.
 */

import { ColorValue, StyleProp, TextStyle } from "react-native";
import { Color, FontSize, Sizes } from "@flexnative/theme-context";

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

export function getStyle(
  style:
    | StyleProp<TextStyle>
    | ((pressed: boolean) => StyleProp<TextStyle>)
    | undefined,
    pressed: boolean): StyleProp<TextStyle> {
    if(style === undefined)
      return undefined;
    else
      return (typeof style === 'function') ? style(pressed) : style
}

export function getIconSize(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'md';
    case 'medium':
      return 'lg';
    case 'large':
      return 'xxl'
    default:
      return size;
  }
}

export function getBoxShadowWidth(size: Sizes): string {
  switch (size) {
    case 'small':
      return '2px';
    case 'medium':
      return '3px';
    case 'large':
      return '4px'
    default:
      return '2px';
  }
}