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