/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-06 23:18:02
 * @ Description: Theme Context.
 */

import React from 'react';

import { light } from './colors';
import { ThemeContextProps } from './props';

/**
 * A React context for managing theme-related properties.
 * 
 * @typeParam T - The type of the theme context properties.
 * 
 * @property {ThemeContextProps<any>} defaultValue - The default value for the theme context, 
 * which includes the colors property set to the light theme.
 */
const ThemeContext = React.createContext<ThemeContextProps<any>>({colors: light} as ThemeContextProps<any>);

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