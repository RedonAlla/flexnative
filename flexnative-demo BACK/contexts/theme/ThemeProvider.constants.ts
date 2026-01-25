/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-09 19:02:39
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-29 00:42:14
 * @ Description: The provided TypeScript code snippet is part of a theme management system for a React Native application. It deals with setting up default theme properties based on the current device's color scheme.
 */

import { Appearance } from "react-native";

import { ThemeProviderProps } from "./ThemeProvider.props"
import { primaryColors } from "@/constants/colors";

/**
 * Retrieve the current color scheme (e.g., 'light' or 'dark') from the device's appearance settings.
 * This method is typically used to apply different styles depending on the user's preferred theme.
 */
export const deviceScheme = Appearance.getColorScheme();

/**
 * Object serves as a baseline configuration for setting up themes within an application.
 * By using the current device color scheme and a predefined primary color:

 * - **Dynamic Styling**: Ensures that UI components can adjust according to the user's preferred color scheme.
 * - **Consistency**: Provides a consistent starting point for theming across different components or modules within the app.
 */
export const defaultTheme: ThemeProviderProps = {
  /**
   * Set to the current device scheme retrieved via `deviceScheme`.
   */
  scheme: deviceScheme,

  /**
   * Defaults to red, pulled from the `primaryColors` constant,
   * suggesting a collection of named colors.
   */
  primaryColor: primaryColors['red']
};
