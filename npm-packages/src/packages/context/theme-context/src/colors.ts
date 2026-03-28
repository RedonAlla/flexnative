import { BaseColors } from './props';

/**
 * Defines the default dark color palette for the theme.
 * This object implements the `BaseColors` interface and provides specific color values
 * suitable for dark mode interfaces.
 *
 * @type {BaseColors}
 */
export const dark: BaseColors = {
  white: '#FFFFFF',
  black: '#1f1f1f',
  background: "#141414",
  default: '#3D3D3D',
  card: '#3d3d3d',
  text: '#F5F5F5',
  border: '#42424226',
  placeholder: '#0000001A',
  info: "#0058e9",
  success: "#37b400",
  warning: "#ffc000",
  error: "#f31700",
  primary: '#EA5A51',
  dark: "#3d3d3d",
  secondary: "#C2C2C2",
  light: "#E0E0E0",
};

/**
 * Defines the default light color palette for the theme.
 * This object implements the `BaseColors` interface and provides specific color values
 * suitable for light mode interfaces.
 *
 * @type {BaseColors}
 */
export const light: BaseColors = {
  white: '#FFFFFF',
  black: '#3d3d3d',
  default: '#f5f5f5',
  background: "#fafafa",
  card: "#ffffff",
  text: '#424242',
  border: '#FFFFFF14',
  placeholder: '#666666',
  info: "#0058e9",
  success: "#37b400",
  warning: "#ffc000",
  error: "#f31700",
  dark: "#3d3d3d",
  secondary: "#666666",
  light: "#ebebeb",
  primary: '#ff6358',
};