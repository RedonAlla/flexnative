/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 13:05:09
 * @ Description: Default colors for FlexNative framework. Support dark and light colors.
 */

import { BaseTheme } from './types';


export const light: BaseTheme = {
  background: "#f8f8f8",
  default: '#f5f5f5',
  card: '#ffffff',
  text: '#424242',
  border: '#42424226',
  placeholder: '#0000001A',
  info: "#3e80ed",
  success: "#5ec232",
  warning: "#ffc107",
  error: "#d51923",
  dark: "#424242",
  secondary: "#666666",
  light: "#ebebeb",
  primary: '#ff6358'
};

export const dark: BaseTheme = {
  default: '#404040',
  background: "#000000",
  card: "#232323",
  text: '#ffffff',
  border: '#ffffff1A',
  placeholder: '#FFFFFF1A',
  info: "#3e80ed",
  success: "#5ec232",
  warning: "#ffc107",
  error: "#d51923",
  dark: "#424242",
  secondary: "#5C5C5C",
  light: "#ebebeb",
  primary: '#ff6358'
};