/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-06 16:22:42
 * @ Description: Utilities functions use for Badge component.
 */

import { ColorValue } from "react-native";
import { Color, FontSize, Sizes, Spaces } from "@flexnative/theme-context";

import { BadgeType } from "./props";
import { WHITE_COLOR } from "./constants";


export function getTextColor(isDark: boolean, color: Color, colorValue: ColorValue, fillMode: BadgeType, blackColor: ColorValue): ColorValue {
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

/**
 * Returns the theme space key based on the provided size.
 * 
 * @param {Sizes} [size='medium'] - The size of the message box. 
 * @returns {Spaces} The theme space key from {@link BaseTheme}.
 */
export function getThemeSpaceKey(size?: Sizes): Spaces
{
  switch (size) {
    case 'small':
      return 'xxs';
    
    case 'medium':
      return 'xs';
      
    case 'large':
      return 'sm';
  
    default:
      return 'xs';
  }
}

/**
 * Returns the theme font size key based on the provided size.
 * 
 * @param {Sizes} [size='medium'] - The size of the message box.
 * @returns {FontSize} The theme font size key.
 */
export function getThemeFontSizeKey(size?: Sizes): FontSize
{
  switch (size) {
    case 'small':
      return 'sm';
    
    case 'medium':
      return 'md';
      
    case 'large':
      return 'lg';
  
    default:
      return 'md';
  }
}