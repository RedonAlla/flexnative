/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-07 19:44:33
 * @ Description: Utilities functions used for Avatar component.
 */

import { ColorValue } from "react-native";

import { BaseTheme, Color } from "@flexnative/theme-context";
import { BLACK_TEXT_COLOR, BORDER_RADIUS, BORDER_WIDTH, GHOST_TRANSPARENCY, WHITE_TEXT_COLOR } from "@flexnative/ui-constants";

import { AVATAR_SIZES } from "./constants";
import { AvatarColor, Sizes, FillMode, BorderWidth, BorderRadius } from "./props";


/**
 * Get `Avatar` size based on size prop.
 * 
 * @param {Sizes} size - user preferred `Avatar` size.
 * 
 * @returns {number}
 */
export function getSize(size?: Sizes): number {
  switch (size) {
    case 'small':
      return AVATAR_SIZES.small;
    case 'medium':
      return AVATAR_SIZES.medium;
    case 'large':
      return AVATAR_SIZES.large;
    default:
      return size!;
  }
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {AvatarColor} color - user selected color.
 * @param {BaseTheme} theme - colors from selected theme.
 * 
 * @returns {ColorValue}
 */
export function getColor(color: AvatarColor, theme: BaseTheme): ColorValue {
  switch (color) {
    case 'default':
      return theme.default;

    case 'primary':
      return theme.primary;

    case 'secondary':
      return theme.secondary;

    case 'info':
      return theme.info;

    case 'success':
      return theme.success;

    case 'warning':
      return theme.warning;

    case 'error':
      return theme.error;

    case 'dark':
      return theme.dark;

    case 'light':
      return theme.light;
  
    default:
      return color;
  }
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {ColorValue} color - user selected color.
 * @param {FillMode} fillMode - user preferred button fillMode.
 * @returns {ColorValue}
 */
export function getBackgroundColor(color: ColorValue, fillMode?: FillMode): ColorValue {
  switch (fillMode) {
    case 'none':
      return 'transparent';

    case 'solid':
      return color;

    case 'ghost':
      return `${color.toString()}${GHOST_TRANSPARENCY}`;
      
    default:
      return color;
  }
}

/**
 * Get border radius based on button prop.
 * 
 * @param {BorderRadius} radius - user preferred border radius.
 * 
 * @returns {number}
 */
export function getBorderRadius(radius: BorderRadius): number {
  switch (radius) {
    case 'none':
      return BORDER_RADIUS.none;

    case 'small':
      return BORDER_RADIUS.small;
      
    case 'medium':
      return BORDER_RADIUS.medium;

    case 'large':
      return BORDER_RADIUS.large;

    case 'full':
      return BORDER_RADIUS.full;
  
    default:
      return radius;
  }
}

/**
 * Get border width based on button prop.
 * 
 * @param {BorderWidth} width - user preferred border radius.
 * 
 * @returns {number}
 */
export function getBorderWidth(width?: BorderWidth): number {
  switch (width) {
    case 'none':
      return BORDER_WIDTH.none;

    case 'hairline':
      return BORDER_WIDTH.hairline;

    case 'base':
      return BORDER_WIDTH.base;

    case 'thick':
      return BORDER_WIDTH.thick;

    case 'thin':
      return BORDER_WIDTH.thin;
  
    default:
      return width as number;
  }
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {Color} color - user selected color.
 * @param {FillMode} fillMode - user selected avatar type.
 * @param {BaseTheme} theme - colors from selected theme.
 * 
 * @returns {ColorValue}
 */
export function getTextColor(color: Color, fillMode: FillMode, theme: BaseTheme<any>): ColorValue {
  const isLight = theme.scheme === 'dark';

  if(Boolean(color === 'light' || color === 'secondary'))
    return theme.colors.black;

  return Boolean(isLight && color === 'default')
    ? theme.colors.black
    : fillMode === 'solid'
      ? theme.colors.white
      : theme.colors[color!] ?? color
}