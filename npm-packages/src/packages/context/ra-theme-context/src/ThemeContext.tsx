/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-10 13:17:53
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
const ThemeContext = React.createContext<ThemeContextProps<any>>(defaultTheme());

/**
 * Custom hook to access the current theme context.
 *
 * This hook provides access to the `ThemeContext` which contains the current theme settings.
 * It uses the `React.useContext` hook to retrieve the context value.
 *
 * @returns {ThemeContextType} The current theme context value.
 */
export const useThemeContext = () => React.useContext(ThemeContext);

export default ThemeContext;