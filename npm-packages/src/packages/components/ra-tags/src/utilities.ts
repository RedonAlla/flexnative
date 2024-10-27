/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 23:30:40
 * @ Description: Utilities methods for Tag component.
 */

import { ColorValue } from "react-native";
import { BaseTheme } from "@flexnative/theme-context";
import { BLACK_TEXT_COLOR, GHOST_TRANSPARENCY, WHITE_TEXT_COLOR, BORDER_RADIUS, FONT_SIZE, BORDER_WIDTH } from "@flexnative/ui-constants";

import { TagColor, TagType, TagRadius, TagSize, BorderWidth } from "./props";


/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {boolean} isLight - Boolean if Color Scheme it is in light mode.
 * @param {TagColor} color - user selected color.
 * @param {TagType} type - user selected tag type.
 * @param {BaseTheme} theme - colors from selected theme.
 * @param {ColorValue} theme - user preferred text color.
 * 
 * @returns {ColorValue}
 */
export function getTextColor(isLight: boolean, color: TagColor, type: TagType, theme: BaseTheme, textColor?: ColorValue) {
  if(Boolean(textColor))
    return textColor;
  
  if(Boolean(color === 'light'))
    return BLACK_TEXT_COLOR;

  return Boolean(isLight && color === 'default')
    ? BLACK_TEXT_COLOR
    : type === 'default'
      ? WHITE_TEXT_COLOR
      : getColor(color, theme)
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {TagColor} color - user selected color.
 * @param {BaseTheme} theme - colors from selected theme.
 * @param {TagType} type - user preferred tag type.
 * @param {ColorValue} backgroundColor - backgroundColor color selected by user.
 * @returns {ColorValue}.
 */
export function getBackgroundColor(color: TagColor, theme: BaseTheme, type?: TagType, backgroundColor?: ColorValue): ColorValue {
  if(backgroundColor)
      return backgroundColor;

  switch (type) {
    case 'text':
      return 'transparent';

    case 'ghost':
      return `${getColor(color, theme).toString()}${GHOST_TRANSPARENCY}`;
      
    default:
      return getColor(color, theme);
  }
}

  /**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {Color} color - user selected color.
 * @param {BaseTheme} theme - colors from selected theme.
 * 
 * @returns {ColorValue}
 */
export function getColor(color: TagColor, theme: BaseTheme): ColorValue {
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
 * Get border radius based on tag prop.
 * 
 * @param {TagRadius} radius - user preferred border radius.
 * 
 * @returns {number}
 */
export function getBorderRadius(radius: TagRadius): number {
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
 * Get text size based on tag prop.
 * 
 * @param {TagSize} size - user preferred tag size.
 * 
 * @returns {number}
 */
export function getTextSize(size?: TagSize): number {
  switch (size) {
    case 'small':
      return FONT_SIZE.small;
    case 'default':
      return FONT_SIZE.default;
    case 'medium':
      return FONT_SIZE.medium;
    case 'large':
      return FONT_SIZE.large;
    default:
      return FONT_SIZE.default;
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