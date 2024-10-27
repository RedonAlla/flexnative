import { ColorValue, StyleProp } from "react-native";
import { BaseTheme } from "@flexnative/theme-context";

import { BORDER_RADIUS, BORDER_WIDTH, FONT_SIZE } from "./input.constants";
import { BorderRadius, BorderWidth, InputColor, InputType, Sizes, StateCallbackType } from "./input.props";


/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {Color} color - user selected color.
 * @param {BaseTheme} theme - colors from selected theme.
 * 
 * @returns {ColorValue} selected theme color.
 */
export function getColor(theme: BaseTheme, color?: InputColor): ColorValue {
  if(!Boolean(color))
    return theme.border;

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
      return color!;
  }
}

/**
 * Get border radius based on input prop.
 * 
 * @param {BorderRadius} radius - user preferred border radius.
 * 
 * @returns {number} border radius.
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
 * Get border width based on input prop.
 * 
 * @param {BorderWidth} width - user preferred border radius.
 * 
 * @returns {number} border width.
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
 * Get borders styles based on input prop.
 * 
 * @param {InputType} type - user preferred input type.
 * @param {BorderWidth} width - user preferred input border width.
 * 
 * @return {Object} borders styles.
 */
export function getBorders(type: InputType, width: BorderWidth):
{ borderBottomWidth?: number, borderWidth?: number} {
  const borderWidth = getBorderWidth(width);

  return type == 'underlined' 
    ? { borderBottomWidth: borderWidth }
    : { borderWidth: borderWidth };
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {ColorValue} color - user selected color.
 * @return {ColorValue} color value used for background.
 */
export function getBackgroundColor(color?: ColorValue): ColorValue {
  return color || 'transparent';
}

/**
 * Get text size based on input prop.
 * 
 * @param {Sizes} size - user preferred input size.
 * 
 * @returns {number}
 */
export function getTextSize(size?: Sizes): number {
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

export function getStyle<T>(
  style:
    | StyleProp<T>
    | ((state: StateCallbackType) => StyleProp<T>)
    | undefined,
  focused: boolean): StyleProp<T> {
    if(style === undefined)
      return undefined;
    else
      return (typeof style === 'function') ? (style as ((state: StateCallbackType) => StyleProp<T>))({focused}) : style
}

export function isObject<T>(value: T) {
  return typeof value === 'object';
}

export function includes<T>(values: Array<T>, value: T, valueField?: string) {
  return isObject<T>(value)
    ? values?.findIndex(item => item[valueField as keyof T] === value![valueField as keyof T]) > -1
    : values?.indexOf(value) > -1;
}

export function isEqual<T>(value: T, selectedValue: T, valueField?: string) {
  if(value === undefined || selectedValue === undefined)
    return false;
  
  return isObject<T>(value)
    ? value![valueField as keyof T] === selectedValue![valueField as keyof T]
    : value === selectedValue;
}