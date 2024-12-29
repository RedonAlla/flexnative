/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-12 23:02:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-13 23:06:01
 * @ Description: The provided TypeScript code defines two functions, `isDark` and `statusBarStyle`, which deal with color schemes typically used in applications to set themes or styles based on user preferences or system settings. 
 */

import { StatusBarStyle } from "expo-status-bar";
import { ColorSchemeName } from "react-native";


/**
 * Export a constant function 'isDark' that takes a ColorSchemeName as an argument.
 * It returns true if the scheme is 'dark'; otherwise, it returns false.
 * 
 * @param {ColorSchemeName} scheme 
 * @returns {Boolean} - It returns `true` if the scheme is `dark`; otherwise, it returns `false`.
 */
export const isDark = (scheme: ColorSchemeName) => Boolean(scheme === 'dark');

/**
 * Function `statusBarStyle` determines the appropriate status bar style based on the provided color scheme.
 * 
 * @param scheme - The color scheme which can be 'dark', 'light', null, or undefined.
 * @returns A StatusBarStyle value ('auto', 'light', or 'dark').
 */
export function statusBarStyle(scheme: ColorSchemeName): StatusBarStyle {
  switch (scheme) {
    case null:
    case undefined:
      return 'auto';
    
    case 'dark':
      return 'light';
      
    case 'light':
      return 'dark';
  }
}