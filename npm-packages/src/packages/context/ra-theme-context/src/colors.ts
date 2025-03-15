/**
 * @file colors.ts
 * @author Redon Alla <redon.alla@gmail.com>
 * @createDate 2023-06-04 21:29:02
 * @modifyDate 2025-03-09 16:49:01
 * @description Defines the default color palettes for the FlexNative framework, supporting both dark and light color schemes.
 */

import { BaseColors } from './props';

/**
 * @constant dark
 * @type {BaseColors}
 * @description Defines the default color palette for the dark color scheme.
 *
 * This object provides a comprehensive set of color values for UI elements in dark mode.
 * It includes colors for backgrounds, text, borders, placeholders, and various UI states
 * such as hover and active. Semantic colors like `primary`, `secondary`, `info`, `success`,
 * `warning`, and `error` are also defined, along with their subtle variations for overlays
 * and secondary actions.
 * 
 * @property {string} white - The color white (#FFFFFF).
 * @property {string} black - The color black (#1f1f1f).
 * @property {string} background - The background color for dark mode (#292929).
 * @property {string} default - The default color for elements (#3D3D3D).
 * @property {string} defaultHover - The hover state color for default elements (#4D4D4D).
 * @property {string} defaultActive - The active state color for default elements (#575757).
 * @property {string} defaultSubtle - The subtle color for default elements with transparency(#3d3d3da1).
 * @property {string} defaultSubtleHover - The subtle hover state color for default elements with transparency (#3D3D3D2b).
 * @property {string} defaultSubtleActive - The subtle active state color for default elements with transparency (#3D3D3D40).
 * @property {string} card - The background color for card components (#3d3d3d).
 * @property {string} text - The color for text elements (#F5F5F5).
 * @property {string} border - The color for borders (#42424226).
 * @property {string} placeholder - The color for placeholder text (#0000001A).
 * @property {string} info - The color for informational elements (#0058e9).
 * @property {string} infoHover - The hover state color for informational elements (#0052D6).
 * @property {string} infoActive - The active state color for informational elements (#004ac2).
 * @property {string} infoSubtle - The subtle color for informational elements with transparency (#0058e982).
 * @property {string} infoSubtleHover - The subtle hover state color for informational elements with transparency (#0058e9a1).
 * @property {string} infoSubtleActive - The subtle active state color for informational elements with transparency (#0058e940).
 * @property {string} success - The color for success elements (#37b400).
 * @property {string} successHover - The hover state color for success elements (#32a500).
 * @property {string} successActive - The active state color for success elements (#2d9600).
 * @property {string} successSubtle - The subtle color for success elements with transparency (#37b4000d).
 * @property {string} successSubtleHover - The subtle hover state color for success elements with transparency (#37b4002b).
 * @property {string} successSubtleActive - The subtle active state color for success elements with transparency (#37b40040).
 * @property {string} warning - The color for warning elements (#ffc000).
 * @property {string} warningHover - The hover state color for warning elements (#eaaf00).
 * @property {string} warningActive - The active state color for warning elements (#d49f00).
 * @property {string} warningSubtle - The subtle color for warning elements with transparency (#ffc0000d).
 * @property {string} warningSubtleHover - The subtle hover state color for warning elements with transparency (#ffc0002b).
 * @property {string} warningSubtleActive - The subtle active state color for warning elements with transparency (#ffc00040).
 * @property {string} error - The color for error elements (#f31700).
 * @property {string} errorHover - The hover state color for error elements (#df1600).
 * @property {string} errorActive - The active state color for error elements (#BB4841).
 * @property {string} errorSubtle - The subtle color for error elements with transparency (#f317000d).
 * @property {string} errorSubtleHover - The subtle hover state color for error elements with transparency (#f317002b).
 * @property {string} errorSubtleActive - The subtle active state color for error elements with transparency (#f3170040).
 * @property {string} primary - The primary color (#EA5A51).
 * @property {string} primaryHover - The hover state color for primary elements (#D35149).
 * @property {string} primaryActive - The active state color for primary elements (#d45349).
 * @property {string} primarySubtle - The subtle color for primary elements with transparency (#EA5A510d).
 * @property {string} primarySubtleHover - The subtle hover state color for primary elements with transparency (#EA5A512b).
 * @property {string} primarySubtleActive - The subtle active state color for primary elements with transparency (#EA5A5140).
 * @property {string} dark - The dark color (#3d3d3d).
 * @property {string} darkHover - The hover state color for dark elements (#292929).
 * @property {string} darkActive - The active state color for dark elements (#1f1f1f).
 * @property {string} darkSubtle - The subtle color for dark elements with transparency (#3d3d3d0d).
 * @property {string} darkSubtleHover - The subtle hover state color for dark elements with transparency (#3d3d3d2b).
 * @property {string} darkSubtleActive - The subtle active state color for dark elements with transparency (#3d3d3d40).
 * @property {string} secondary - The secondary color (#C2C2C2).
 * @property {string} secondaryHover - The hover state color for secondary elements (#D6D6D6).
 * @property {string} secondaryActive - The active state color for secondary elements (#EBEBEB).
 * @property {string} secondarySubtle - The subtle color for secondary elements with transparency (#C2C2C20d).
 * @property {string} secondarySubtleHover - The subtle hover state color for secondary elements with transparency (#C2C2C22b).
 * @property {string} secondarySubtleActive - The subtle active state color for secondary elements with transparency (#C2C2C240).
 * @property {string} light - The light color (#EBEBEB).
 * @property {string} lightHover - The hover state color for light elements (#E0E0E0).
 * @property {string} lightActive - The active state color for light elements (#D6D6D6).
 * @property {string} lightSubtle - The subtle color for light elements with transparency (#EBEBEB0d).
 * @property {string} lightSubtleHover - The subtle hover state color for light elements with transparency (#EBEBEB2b).
 * @property {string} lightSubtleActive - The subtle active state color for light elements with transparency (#EBEBEB40).
 */
export const dark: BaseColors = {
  white: '#FFFFFF',
  black: '#1f1f1f',
  background: "#141414",
  default: '#3D3D3D',
  defaultHover: '#4D4D4D',
  defaultActive: '#575757',
  defaultSubtle: '#3d3d3d0d',
  defaultSubtleHover: '#3D3D3D2b',
  defaultSubtleActive: '#3D3D3D40',
  card: '#3d3d3d',
  text: '#F5F5F5',
  border: '#42424226',
  placeholder: '#0000001A',
  info: "#0058e9",
  infoHover: "#0052D6",
  infoActive: "#004ac2",
  infoSubtle: "#0058e90d",
  infoSubtleHover: '#0058e92b',
  infoSubtleActive: '#0058e940',
  success: "#37b400",
  successHover: "#32a500",
  successActive: "#2d9600",
  successSubtle: "#37b4000d",
  successSubtleHover: '#37b4002b',
  successSubtleActive: '#37b40040',
  warning: "#ffc000",
  warningHover: "#eaaf00",
  warningActive: "#d49f00",
  warningSubtle: "#ffc0000d",
  warningSubtleHover: '#ffc0002b',
  warningSubtleActive: '#ffc00040',
  error: "#f31700",
  errorHover: "#df1600",
  errorActive: "#BB4841",
  errorSubtle: "#f317000d",
  errorSubtleHover: '#f317002b',
  errorSubtleActive: '#f3170040',
  primary: '#EA5A51',
  primaryHover: '#D35149',
  primaryActive: '#d45349',
  primarySubtle: '#EA5A510d',
  primarySubtleHover: '#EA5A512b',
  primarySubtleActive: '#EA5A5140',
  dark: "#3d3d3d",
  darkHover: "#292929",
  darkActive: "#1f1f1f",
  darkSubtle: "#3d3d3d0d",
  darkSubtleHover: '#3d3d3d2b',
  darkSubtleActive: '#3d3d3d40',
  secondary: "#C2C2C2",
  secondaryHover: "#D6D6D6",
  secondaryActive: "#EBEBEB",
  secondarySubtle: "#C2C2C20d",
  secondarySubtleHover: '#C2C2C22b',
  secondarySubtleActive: '#C2C2C240',
  light: "#EBEBEB",
  lightHover: "#E0E0E0",
  lightActive: "#D6D6D6",
  lightSubtle: "#EBEBEB0d",
  lightSubtleHover: '#EBEBEB2b',
  lightSubtleActive: '#EBEBEB40'
};

/**
 * @constant light
 * @type {BaseColors}
 * @description Defines the default color palette for the light color scheme.
 *
 * This object provides a comprehensive set of color values for UI elements in light mode.
 * It includes colors for backgrounds, text, borders, placeholders, and various UI states
 * such as hover and active. Semantic colors like `primary`, `secondary`, `info`, `success`,
 * `warning`, and `error` are also defined, along with their subtle variations for overlays
 * and secondary actions.
 *
 * @property {string} white - The color white (#FFFFFF).
 * @property {string} black - The color black (#3d3d3d).
 * @property {string} background - The background color for light mode (##fafafa).
 * @property {string} default - The default color for elements (#f5f5f5).
 * @property {string} defaultHover - The hover state color for default elements (#ebebeb).
 * @property {string} defaultActive - The active state color for default elements (#d6d6d6).
 * @property {string} defaultSubtle - The subtle color for default elements with transparency(#f5f5f50d).
 * @property {string} defaultSubtleHover - The subtle hover state color for default elements with transparency (#f5f5f52b).
 * @property {string} defaultSubtleActive - The subtle active state color for default elements with transparency (#f5f5f540).
 * @property {string} card - The background color for card components (#ffffff).
 * @property {string} text - The color for text elements (#3d3d3d).
 * @property {string} border - The color for borders (#00000014).
 * @property {string} placeholder - The color for placeholder text (#666666).
 * @property {string} info - The color for informational elements (#0058e9).
 * @property {string} infoHover - The hover state color for informational elements (#0052d6).
 * @property {string} infoActive - The active state color for informational elements (#004ac2).
 * @property {string} infoSubtle - The subtle color for informational elements with transparency (#0058e90d).
 * @property {string} infoSubtleHover - The subtle hover state color for informational elements with transparency (#0058e92b).
 * @property {string} infoSubtleActive - The subtle active state color for informational elements with transparency (#0058e940).
 * @property {string} success - The color for success elements (#37b400).
 * @property {string} successHover - The hover state color for success elements (#32a500).
 * @property {string} successActive - The active state color for success elements (#2d9600).
 * @property {string} successSubtle - The subtle color for success elements with transparency (#37b4000d).
 * @property {string} successSubtleHover - The subtle hover state color for success elements with transparency (#37b4002b).
 * @property {string} successSubtleActive - The subtle active state color for success elements with transparency (#37b40040).
 * @property {string} warning - The color for warning elements (#ffc000).
 * @property {string} warningHover - The hover state color for warning elements (#eaaf00).
 * @property {string} warningActive - The active state color for warning elements (#d49f00).
 * @property {string} warningSubtle - The subtle color for warning elements with transparency (#ffc0000d).
 * @property {string} warningSubtleHover - The subtle hover state color for warning elements with transparency (#ffc0002b).
 * @property {string} warningSubtleActive - The subtle active state color for warning elements with transparency (#ffc00040).
 * @property {string} error - The color for error elements (#f31700).
 * @property {string} errorHover - The hover state color for error elements (#df1600).
 * @property {string} errorActive - The active state color for error elements (#ca1400).
 * @property {string} errorSubtle - The subtle color for error elements with transparency (#f317000d).
 * @property {string} errorSubtleHover - The subtle hover state color for error elements with transparency (#f317002b).
 * @property {string} errorSubtleActive - The subtle active state color for error elements with transparency (#f3170040).
 * @property {string} dark - The dark color (#3d3d3d).
 * @property {string} darkHover - The hover state color for dark elements (#292929).
 * @property {string} darkActive - The active state color for dark elements (#1f1f1f).
 * @property {string} darkSubtle - The subtle color for dark elements with transparency (#2929290d).
 * @property {string} darkSubtleHover - The subtle hover state color for dark elements with transparency (#2929292b).
 * @property {string} darkSubtleActive - The subtle active state color for dark elements with transparency (#29292940).
 * @property {string} secondary - The secondary color (#666666).
 * @property {string} secondaryHover - The hover state color for secondary elements (#525252).
 * @property {string} secondaryActive - The active state color for secondary elements (#3d3d3d).
 * @property {string} secondarySubtle - The subtle color for secondary elements with transparency (#6666660d).
 * @property {string} secondarySubtleHover - The subtle hover state color for secondary elements with transparency (#6666662b).
 * @property {string} secondarySubtleActive - The subtle active state color for secondary elements with transparency (#66666640).
 * */
export const light: BaseColors = {
  white: '#FFFFFF',
  black: '#3d3d3d',
  default: '#f5f5f5',
  defaultHover: '#ebebeb',
  defaultActive: '#d6d6d6',
  defaultSubtle: '#f5f5f50d',
  defaultSubtleHover: '#f5f5f52b',
  defaultSubtleActive: '#f5f5f540',
  background: "##fafafa",
  card: "#ffffff",
  text: '#424242',
  border: '#00000014',
  placeholder: '#666666',
  info: "#0058e9",
  infoHover: "#0052d6",
  infoActive: "#004ac2",
  infoSubtle: "#0058e90d",
  infoSubtleHover: '#0058e92b',
  infoSubtleActive: '#0058e940',
  success: "#37b400",
  successHover: "#32a500",
  successActive: "#2d9600",
  successSubtle: "#37b4000d",
  successSubtleHover: '#37b4002b',
  successSubtleActive: '#37b40040',
  warning: "#ffc000",
  warningHover: "#eaaf00",
  warningActive: "#d49f00",
  warningSubtle: "#ffc0000d",
  warningSubtleHover: '#ffc0002b',
  warningSubtleActive: '#ffc00040',
  error: "#f31700",
  errorHover: "#df1600",
  errorActive: "#ca1400",
  errorSubtle: "#f317000d",
  errorSubtleHover: '#f317002b',
  errorSubtleActive: '#f3170040',
  dark: "#3d3d3d",
  darkHover: "#292929",
  darkActive: "#1f1f1f",
  darkSubtle: "#2929290d",
  darkSubtleHover: '#2929292b',
  darkSubtleActive: '#29292940',
  secondary: "#666666",
  secondaryHover: "#525252",
  secondaryActive: "#3d3d3d",
  secondarySubtle: "#6666660d",
  secondarySubtleHover: '#6666662b',
  secondarySubtleActive: '#66666640',
  light: "#ebebeb",
  lightHover: "#e0e0e0",
  lightActive: "#d6d6d6",
  lightSubtle: "#ebebeb0d",
  lightSubtleHover: '#ebebeb2b',
  lightSubtleActive: '#ebebeb40',
  primary: '#ff6358',
  primaryHover: '#ea5a51',
  primaryActive: '#d45349',
  primarySubtle: '#ff63580d',
  primarySubtleHover: '#ff63582b',
  primarySubtleActive: '#ff635840'
};