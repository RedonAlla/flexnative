/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-09 18:51:39
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-15 21:21:59
 * @ Description: The code defines a TypeScript type alias named `ThemeProviderProps`. This type is used to describe the shape of an object, specifically for representing theme-related properties.
 */


import { ColorSchemeName, ColorValue } from "react-native";


/**
 * Defines a type `ThemeProviderProps` which represents the properties of a theme.
 */
export type ThemeProviderProps = {
  /**
   * `scheme` represents the color scheme name (e.g., 'light', 'dark').
   */
  scheme: ColorSchemeName;
  
  /**
   * `primaryColor` defines the primary color value used in the theme.
   */
  primaryColor: ColorValue;
}