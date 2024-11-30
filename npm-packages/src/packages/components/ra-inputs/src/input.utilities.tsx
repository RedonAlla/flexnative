/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Function serves a distinct purpose in handling styles, data structures, and comparisons.
 */

import { StyleProp } from "react-native";

import { InputType, StateCallbackType } from "./input.props";

/**
 * Get borders styles based on input prop.
 * 
 * @param {InputType} type - user preferred input type.
 * @param {BorderWidth} width - user preferred input border width.
 * 
 * @return {Object} borders styles.
 */
export function getBorders(type: InputType, width: number): { borderBottomWidth?: number, borderWidth?: number} {
  return type === 'underlined' 
    ? { borderBottomWidth: width }
    : { borderWidth: width };
}

/**
 * Handles versatile style inputs that can either be a static style or a dynamic function returning a style.
 * If `style` is undefined, the function returns undefined.
  * If `style` is a function, it's called with an object indicating whether the input is `focused`, and the result is returned.
  * Otherwise, it returns the style directly.
 * @param style 
 * @param focused 
 * @returns 
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