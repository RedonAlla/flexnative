/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-03 00:06:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-06-14 22:24:07
 * @ Description: This file provides utility functions for styling input components.
 * It includes functions to determine font sizes, line heights, theme spacing, and
 * box-shadow styles based on input size and state.
 */


import { StyleProp } from "react-native";
import { BaseColors, FontSize, Sizes, Spaces } from "@flexnative/theme-context";
import { StateCallbackType } from "..";
import { InputType } from "./input.props";

/**
 * Retrieves the appropriate font size key based on the checkbox size.
 *
 * @param {Sizes} size - The size of the checkbox ('small', 'medium', or 'large').
 * @returns {FontSize} The corresponding font size key.
 *   - 'small': 'xs'
 *   - 'medium': 'sm'
 *   - 'large': 'md'
 *   - default: 'sm'
 */
export function getLabelSizeKey(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'xs';
    case 'medium':
      return 'sm';
    case 'large':
      return 'md'
    default:
      return 'sm';
  }
}

/**
 * Retrieves the appropriate font size key for helper text based on the input size.
 *
 * @param {Sizes} size - The size of the input ('small', 'medium', or 'large').
 * @returns {FontSize} The corresponding font size key.
 *   - 'small': 'xxs'
 *   - 'medium': 'xs'
 *   - 'large': 'md'
 *   - default: 'sm'
 */
export function getHelperSizeKey(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'xxs';
    case 'medium':
      return 'xs';
    case 'large':
      return 'sm'
    default:
      return 'xs';
  }
}

/**
 * Retrieves the appropriate font size key for input text based on the input size.
 *
 * @param {Sizes} size - The size of the input ('small', 'medium', or 'large').
 * @returns {FontSize} The corresponding font size key.
 *   - 'small': 'sm'
 *   - 'medium': 'md'
 *   - 'large': 'lg'
 *   - default: 'md'
 */
export function getFontSizeKey(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'sm';
    case 'medium':
      return 'md';
    case 'large':
      return 'lg'
    default:
      return 'md';
  }
}

/**
 * Retrieves the appropriate line height key based on the input size.
 *
 * @param {Sizes} size - The size of the input ('small', 'medium', or 'large').
 * @returns {FontSize} The corresponding line height key.
 *   - 'small': 'md'
 *   - 'medium': 'lg'
 *   - 'large': 'xxl'
 *   - default: 'xxl'
 */
export function getLineHeightKey(size: Sizes): FontSize {
  switch (size) {
    case 'small':
      return 'md';
    case 'medium':
      return 'lg';
    case 'large':
      return 'xxl'
    default:
      return 'lg';
  }
}

/**
 * Retrieves the appropriate theme spacing key based on the input size.
 *
 * @param {Sizes} size - The size of the input ('small', 'medium', or 'large').
 * @returns {Spaces} The corresponding theme spacing key.
 *   - 'small': 'xxs'
 *   - 'medium': 'xs'
 *   - 'large': 'sm'
 *   - default: 'xxs'
 */
export function getThemeSpaceKey(size: Sizes): Spaces {
  switch (size) {
    case 'small':
      return 'xxs';
    case 'medium':
      return 'xs';
    case 'large':
      return 'sm'
    default:
      return 'xs';
  }
}

/**
 * Retrieves the appropriate box-shadow width based on the input size.
 *
 * @param {Sizes} size - The size of the input ('small', 'medium', or 'large').
 * @returns {string} The corresponding box-shadow width in pixels.
 *   - 'small': '2px'
 *   - 'medium': '3px'
 *   - 'large': '4px'
 *   - default: '2px'
 */
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

/**
 * Handles versatile style inputs that can either be a static style or a dynamic function returning a style.
 * If `style` is undefined, the function returns undefined.
 * If `style` is a function, it's called with an object indicating whether the input is `focused`, and the result is returned.
 * Otherwise, it returns the style directly.
 *
 * @template T - The type of the style.
 * @param {StyleProp<T> | ((state: StateCallbackType) => StyleProp<T>) | undefined} style - The style or style function.
 * @param {boolean} focused - Indicates whether the input is focused.
 * @returns {StyleProp<T>} The resolved style.
 */

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

/**
 * Generates a box-shadow style string based on input properties.
 *
 * @param {InputType} type - The type of the input ('outlined' or 'underlined').
 * @param {Sizes} size - The size of the input.
 * @param {BaseColors} colors - The base color palette from the theme.
 * @param {keyof BaseColors} colorKeySubtleActive - The key for the subtle active color in the color palette.
 * @param {boolean} [withoutPressedBoxShadow] - Optional flag to disable the box-shadow.
 * @param {string} [pressedBoxShadow] - Optional custom box-shadow style string.
 * @returns {string | undefined} The box-shadow style string, or undefined if no shadow should be applied.
 */
export function getBoxShadowStyle(type: InputType, size: Sizes, colors: BaseColors, colorKeySubtleActive: keyof BaseColors, withoutPressedBoxShadow?: boolean, pressedBoxShadow?: string): string | undefined {
  return withoutPressedBoxShadow
    ? undefined
    : pressedBoxShadow ??
        type === 'underlined'
        ? `${String(colors[colorKeySubtleActive])} 0 ${getBoxShadowWidth(size)} 0`
        : `0 0 0px ${getBoxShadowWidth(size)} ${String(colors[colorKeySubtleActive])}`;
}

/**
 * Utility function to determine if a given value is an object.
 * @param {T} value 
 * @returns 
 */
export function isObject<T>(value: T) {
  return typeof value === 'object';
}

/**
 * Checks whether a specified value exists in an array.
 * For objects, comparison can be made using a particular field indicated by `valueField`.
 * Returns true if `value` is found, otherwise false.
 * @param values 
 * @param value  
 * @param valueField 
 * @returns 
 */
export function includes<T>(values: Array<T>, value: T, valueField?: string) {
  debugger
  
  return isObject<T>(value)
    ? values?.findIndex(item => item[valueField as keyof T] === value![valueField as keyof T]) > -1
    : values?.indexOf(value) > -1;
}

/**
 * Compares two values for equality.
 * If either `value` or `selectedValue` is undefined, it returns false immediately.
 * For objects, it supports comparing specific properties identified by `valueField`.
  
 * @param value 
 * @param selectedValue 
 * @param valueField 
 * @returns true if they are considered equal, otherwise false.
 */
export function isEqual<T>(value: T, selectedValue: T, valueField?: string) {
  if(value === undefined || selectedValue === undefined)
    return false;
  
  return isObject<T>(value)
    ? value![valueField as keyof T] === selectedValue![valueField as keyof T]
    : value === selectedValue;
}