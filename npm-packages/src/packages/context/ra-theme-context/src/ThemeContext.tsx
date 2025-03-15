/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-02 20:22:41
 * @ Description: Theme Context.
 */

import React from 'react';

import { ThemeContextProps } from './props';
import { defaultTheme } from './utilities';

/**
 * The theme context provides the current theme settings to all components in the application.
 * It uses the `React.createContext` function to create the context object.
 * 
 * @typeParam T - The type of the theme context properties.
 * 
 * @property {ThemeContextProps<any>} defaultValue - The default value for the theme context, initialized with the default theme.
 */
const ThemeContext: React.Context<ThemeContextProps<any>> =
  React.createContext<ThemeContextProps<any>>({
    state: defaultTheme()
  });

/**
 * Custom hook to access the current theme context.
 *
 * This hook provides access to the `ThemeContext` which contains the current theme settings.
 * It uses the `React.useContext` hook to retrieve the context value.
 *
 * @returns {ThemeContextType} The current theme context value.
 */
export function useThemeContext<TColors>(): ThemeContextProps<TColors> {
  const value = React.useContext(ThemeContext);
  if (!value) {
    throw new Error('useThemeContext must be wrapped in a <ThemeProvider />');
  }

  return value;
}

export default ThemeContext;