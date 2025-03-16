/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-16 21:41:08
 * @ Description: Defines the ThemeContext and related hooks for accessing theme data within the application.
 */

import React from 'react';

import { BaseColors, BaseTheme, ThemeContextProps } from './props';
import { defaultTheme } from './utilities';

/**
 * The theme context provides the current theme settings to all components in the application.
 * It uses the `React.createContext` function to create the context object.
 * 
 * @typeParam T - The type of the theme context properties.
 * 
 * @property {ThemeContextProps<any>} defaultValue - The default value for the theme context, initialized with the default theme.
 * 
 *  @example
 * ```typescript
 * // Example of using the ThemeContext directly
 * import ThemeContext from './ThemeContext';
 * 
 * const MyComponent = () => {
 *   return (
 *     <ThemeContext.Consumer>
 *       {(context) => (
 *         <div>
 *           <p>Current Theme: {context.state.name}</p>
 *         </div>
 *       )}
 *     </ThemeContext.Consumer>
 *   );
 * };
 * ```
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
 * @typeParam TColors - The type defining the custom colors added to the theme.
 * @returns {ThemeContextProps<TColors>} The current theme context value.
 * @throws {Error} Throws an error if the hook is used outside of a `ThemeProvider`.
 * @example
 * ```typescript
 * import { useThemeContext } from './ThemeContext';
 * 
 * const MyComponent = () => {
 *   const { state, setTheme, setColors, setColorScheme } = useThemeContext<MyColors>();
 *   // Use the theme data and functions here
 *   return (
 *      <div>
 *          <p>Current theme name: {state.name}</p>
 *      </div>
 *   );
 * };
 * ```
 */
export function useThemeContext<TColors>(): ThemeContextProps<TColors> {
  const value = React.useContext(ThemeContext);
  if (!value) {
    throw new Error('useThemeContext must be wrapped in a <ThemeProvider />');
  }

  return value;
}

/**
 * Custom hook to access the current theme state.
 *
 * This hook provides access to the current theme's state, which includes the theme name, colors, fontSize, etc.
 * It uses the `React.useContext` hook to retrieve the context value.
 *
 * @typeParam TColors - The type defining the custom colors added to the theme.
 * @returns {BaseTheme<TColors>} The current theme state.
 * @throws {Error} Throws an error if the hook is used outside of a `ThemeProvider`.
 * @example
 * ```typescript
 * import { useThemeState } from './ThemeContext';
 * 
 * const MyComponent = () => {
 *   const themeState = useThemeState<MyColors>();
 *   // Use the theme state here (e.g., themeState.colors.primary)
 *   return (
 *       <div>
 *           <p>Current Color Primary: {themeState.colors.primary}</p>
 *       </div>
 *   );
 * };
 * ```
 */
export function useThemeState<TColors>(): BaseTheme<TColors> {
  const value = React.useContext(ThemeContext);
  if (!value) {
    throw new Error('useThemeState must be wrapped in a <ThemeProvider />');
  }

  return value.state;
}

/**
 * Custom hook to access the current theme colors.
 *
 * This hook provides access to the current theme's color palette. It returns an object containing both
 * the base colors and any custom colors defined in the theme.
 * It uses the `React.useContext` hook to retrieve the context value.
 *
 * @typeParam TColors - The type defining the custom colors added to the theme.
 * @returns {BaseColors & TColors} The current theme colors.
 * @throws {Error} Throws an error if the hook is used outside of a `ThemeProvider`.
 * @example
 * ```typescript
 * import { useThemeColors } from './ThemeContext';
 * 
 * const MyComponent = () => {
 *   const themeColors = useThemeColors<MyColors>();
 *   // Use the theme colors here (e.g., themeColors.primary, themeColors.myCustomColor)
 *   return (
 *       <div style={{backgroundColor: themeColors.primary}}>
 *           <p style={{color: themeColors.text}}>Text on Primary color</p>
 *       </div>
 *   );
 * };
 * ```
 */
export function useThemeColors<TColors>(): BaseColors & TColors {
  const value = React.useContext(ThemeContext);
  if (!value) {
    throw new Error('useThemeState must be wrapped in a <ThemeProvider />');
  }

  return value.state.colors;
}

export default ThemeContext;