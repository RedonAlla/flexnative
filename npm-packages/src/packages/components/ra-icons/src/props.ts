/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-02-15 22:56:12
 * @ Description: Props for Icon component.
 */

import { TextProps } from 'react-native';
import { Color, FontSize } from '@flexnative/theme-context';

/**
 * Interface representing the names of various icons.
 * Each property is a readonly string representing a specific icon name.
 * These names can be used to access the corresponding Unicode value from the `icons` object.
 */
export interface IconName {
  readonly "rocket": string;
  readonly "shield-lock": string;
  readonly "fingerprint": string;
  readonly "layout": string;
  readonly "sort-number-desc": string;
  readonly "sort-number-asc": string;
  readonly "sort-alphabet-desc": string;
  readonly "sort-alphabet-asc": string;
  readonly "unsort": string;
  readonly "puzzle": string;
  readonly "multi-device": string;
  readonly "lightning": string;
  readonly "gridicons": string;
  readonly "light-dark": string;
  readonly "color-palete": string;
  readonly "check": string;
  readonly "badge": string;
  readonly "menu": string;
  readonly "bookmark": string;
  readonly "label": string;
  readonly "grid": string;
  readonly "text-block": string;
  readonly "popup": string;
  readonly "modal": string;
  readonly "filet-json": string;
  readonly "file-excel": string;
  readonly "avatar": string;
  readonly "users": string;
  readonly "chevron-left": string;
  readonly "caret-down": string;
  readonly "caret-up": string;
  readonly "sun": string;
  readonly "moon": string;
  readonly "star": string;
  readonly "image": string;
  readonly "check-list": string;
  readonly "checkbox": string;
  readonly "number-input": string;
  readonly "button": string;
  readonly "text-box": string;
  readonly "web": string;
  readonly "android": string;
  readonly "apple": string;
  readonly "close-circle": string;
  readonly "material-design": string;
  readonly "spinner-1": string;
  readonly "spinner-2": string;
  readonly "spinner-3": string;
  readonly "sort-alt": string;
  readonly "spinner": string;
  readonly "spinner-ios": string;
  readonly "file-pdf": string;
  readonly "paint-brush": string;
  readonly "trash": string;
} 

/**
 * A collection of icon names mapped to their corresponding Unicode values.
 * These icons can be used throughout the application for various UI elements.
 */
export const icons = {
  "rocket": "\ue931",
  "shield-lock": "\ue92f",
  "fingerprint": "\ue930",
  "layout": "\ue92e",
  "sort-number-desc": "\ue90a",
  "sort-number-asc": "\ue90b",
  "sort-alphabet-desc": "\ue90c",
  "sort-alphabet-asc": "\ue92c",
  "unsort": "\ue92d",
  "puzzle": "\ue907",
  "multi-device": "\ue929",
  "lightning": "\ue92a",
  "gridicons": "\ue92b",
  "light-dark": "\ue900",
  "color-palete": "\ue901",
  "check": "\ue903",
  "badge": "\ue902",
  "menu": "\ue90d",
  "bookmark": "\ue90e",
  "label": "\ue910",
  "grid": "\ue911",
  "text-block": "\ue912",
  "popup": "\ue913",
  "modal": "\ue914",
  "filet-json": "\ue915",
  "file-excel": "\ue916",
  "avatar": "\ue917",
  "users": "\ue918",
  "chevron-left": "\ue919",
  "caret-down": "\ue91a",
  "caret-up": "\ue91b",
  "sun": "\ue91c",
  "moon": "\ue91d",
  "star": "\ue91e",
  "image": "\ue91f",
  "check-list": "\ue921",
  "checkbox": "\ue922",
  "number-input": "\ue923",
  "button": "\ue924",
  "text-box": "\ue925",
  "web": "\ue926",
  "android": "\ue927",
  "apple": "\ue928",
  "close-circle": "\ue908",
  "material-design": "\ue920",
  "spinner-1": "\ue97f",
  "spinner-2": "\ue980",
  "spinner-3": "\ue983",
  "sort-alt": "\ue904",
  "spinner": "\ue905",
  "spinner-ios": "\ue97c",
  "file-pdf": "\ue90f",
  "paint-brush": "\ue909",
  "trash": "\ue906"
}

/**
 * Properties for the BaseIcon component.
 * 
 * @extends TextProps
 * 
 * @property {FontSize} [size] - Icon size.
 * @default "normal"
 * 
 * @property {Color} [color] - Icon color, which can be one of the colors used by ThemeProvider or a given ColorValue.
 * @default theme.colors.text (text color provided by ThemeContextProps)
 */
export interface BaseIconProps extends TextProps {
  /** Icon size
   * @default normal
  */
  size?: FontSize;

  /** Icon color one of color used by ThemeProvider or given ColorValue
   * @default theme.colors.text (text color provided by ThemeContextProps)
  */
  color?: Color;
}

/**
 * Interface representing the properties for an icon component.
 * 
 * @extends BaseIconProps
 * 
 * @property {keyof IconName} name - Name of the icon to use (Specific to the chosen Icon Pack).
 */
export interface IconProps extends BaseIconProps {
  /** Name of the icon to use (Specific to the chosen Icon Pack) */
  name: keyof IconName;
}