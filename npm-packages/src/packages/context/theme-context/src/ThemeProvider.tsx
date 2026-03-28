/**
 * @file ThemeProvider.tsx
 * @author Redon Alla <redon.alla@gmail.com>
 * @createDate 2023-06-04 21:29:02
 * @modifyDate 2025-03-02 18:36:42
 * @description Provides theming capabilities to the application through a React Context.
 *
 * This file defines the `ThemeProvider` component, which is responsible for
 * managing the application's theme and making it available to child components
 * via a React Context. It allows for dynamic theme switching, color scheme
 * management, and persisting theme preferences.
 */

import React from 'react';
import { ColorSchemeName } from 'react-native';

import ThemeContext from './ThemeContext';
import { BaseTheme, ThemeProviderProps } from './props';
import { defaultTheme } from './theme-utilities';

/**
 * Defines the state properties for the ThemeProvider component.
 *
 * This type combines the base theme state with any additional custom state
 * properties defined by the consumer of the ThemeProvider.
 *
 * @template TColors The type for the custom colors in the theme.
 * @template TState An optional type for additional state properties, defaulting to an empty object.
 * @property {BaseTheme<TColors>} [theme] - The current theme object. It is optional to allow for asynchronous loading.
 */

type StateProps<TColors, TState = {}> = {
  theme?: BaseTheme<TColors>
} & TState;


/**
 * ThemeProvider Component
 *
 * Provides a React Context for managing the application's theme. This component
 * allows you to define, switch, and persist themes and color schemes.
 *
 * @template TColors - An optional type to extend the base colors with custom color properties.
 * @extends React.PureComponent<ThemeProviderProps<TColors>, StateProps<TColors>>
 * @example
 * ```typescript
 * // Example of extending the BaseColors
 * interface MyColors {
 *   myCustomColor: ColorValue;
 * }
 *
 * // Example of implementation
 * class AppThemeProvider extends ThemeProvider<MyColors, {}> {
 *   protected async onLoad() {
 *     // Load theme from storage
 *   }
 *   protected async onChangeColorScheme(scheme) { ... }
 *   protected async onChangeTheme(theme) { ... }
 * }
 *
 * // Usage
 * <AppThemeProvider>
 *   <MyApp />
 * </AppThemeProvider>
 * ```
 */
export default abstract class ThemeProvider<TColors, TState> extends React.PureComponent<ThemeProviderProps<TColors>, StateProps<TColors, TState>> {
  constructor(props: ThemeProviderProps<TColors>) {
    super(props)
    
    this.state = {
      theme: props.theme ?? defaultTheme() as BaseTheme<TColors>
    } as StateProps<TColors, TState>
  }

  /**
   * onChangeColorScheme - Method to change the color scheme.
   *
   * This abstract method should be implemented to handle changes in the color scheme
   * (e.g., 'light' or 'dark'). It allows you to update the color scheme and persist
   * the user's preference.
   *
   * @abstract
   * @param {ColorSchemeName} colorScheme - The new color scheme to apply.
   * @returns {Promise<void>} A promise that resolves when the color scheme has been changed.
   * @example
   * ```typescript
   *  async onChangeColorScheme(colorScheme: ColorSchemeName) {
   *      await AsyncStorage.setItem('colorScheme', colorScheme);
   *      console.log('colorScheme saved:', colorScheme);
   * }
   * ```
   */
  protected abstract onChangeColorScheme(colorScheme: ColorSchemeName): Promise<void>;

  /**
   * onScaleChange - Method to change the application scaling factor.
   *
   * This abstract method should be implemented to handle changes in the UI scaling factor.
   * It allows you to update the scale and persist the user's preference.
   *
   * @abstract
   * @param {number} scale - The new scaling factor to apply.
   * @returns {Promise<void>} A promise that resolves when the scale has been changed.
   * @example
   * ```typescript
   *  async onScaleChange(scale: number) {
   *      await AsyncStorage.setItem('themeScale', scale.toString());
   *      console.log('Scale saved:', scale);
   * }
   * ```
   */
  protected abstract onScaleChange(scale: number): Promise<void>;

  /**
   * onChangeTheme - Method to change the theme.
   *
   * This abstract method should be implemented to handle changes in the theme.
   * It enables you to update the theme object and persist the user's chosen theme.
   *
   * @abstract
   * @template T - The type of the theme argument.
   * 
  * @param {T} arg - The new theme to apply.
  * @returns {Promise<void>} A promise that resolves when the theme has been changed.
  */
  protected abstract onChangeTheme<T>(arg: T): Promise<void>;

  public render() {
    return (
      <ThemeContext.Provider value={{
        state: this.state.theme as BaseTheme<TColors>,
        setTheme: this.onChangeTheme.bind(this),
        setColorScheme: this.onChangeColorScheme.bind(this),
        setScale: this.onScaleChange.bind(this)
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}