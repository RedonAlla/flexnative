/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-06 23:19:42
 * @ Description: Default colors for FlexNative framework. Support dark and light colors.
 */

import { BaseColors } from './props';


/**
 * A collection of color values for the light theme.
 * 
 * @property {string} white - The color code for white.
 * @property {string} black - The color code for black.
 * @property {string} background - The background color.
 * @property {string} default - The default color.
 * @property {string} card - The color for card backgrounds.
 * @property {string} text - The color for text.
 * @property {string} border - The color for borders.
 * @property {string} placeholder - The color for placeholders.
 * @property {string} info - The color for informational messages.
 * @property {string} success - The color for success messages.
 * @property {string} warning - The color for warning messages.
 * @property {string} error - The color for error messages.
 * @property {string} dark - The dark color variant.
 * @property {string} secondary - The secondary color.
 * @property {string} light - The light color variant.
 * @property {string} primary - The primary color.
 * @property {string} overlay - The color for overlays.
 */
export const light: BaseColors = {
  white: '#FFFFFF',
  black: '#424242',
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
  primary: '#ff6358',
  overlay: '#00000021',
};

/**
 * A set of color definitions for a dark theme.
 * 
 * @property {string} white - The color code for white.
 * @property {string} black - The color code for black.
 * @property {string} default - The default color code.
 * @property {string} background - The background color code.
 * @property {string} card - The card background color code.
 * @property {string} text - The text color code.
 * @property {string} border - The border color code with transparency.
 * @property {string} placeholder - The placeholder color code with transparency.
 * @property {string} info - The color code for informational messages.
 * @property {string} success - The color code for success messages.
 * @property {string} warning - The color code for warning messages.
 * @property {string} error - The color code for error messages.
 * @property {string} dark - The color code for dark elements.
 * @property {string} secondary - The secondary color code.
 * @property {string} light - The light color code.
 * @property {string} primary - The primary color code.
 * @property {string} overlay - The overlay color code with transparency.
 */
export const dark: BaseColors = {
  white: '#FFFFFF',
  black: '#424242',
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
  primary: '#ff6358',
  overlay: '#FFFFFF21',
};