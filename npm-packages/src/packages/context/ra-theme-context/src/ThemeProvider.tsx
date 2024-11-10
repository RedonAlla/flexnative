/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-10 13:18:19
 * @ Description: Theme Provider
 */

import React from 'react';
import { ColorSchemeName } from 'react-native';

import ThemeContext from './ThemeContext';
import { BaseColors, BaseTheme, ThemeProviderProps } from './props';
import { createTheme, defaultColors } from './utilities';


/**
 * Represents the state properties for the theme provider.
 *
 * @template TColors - A type representing additional theme colors.
 *
 * @property {BaseColors & TColors} colors - Default theme colors. You can add whatever values you want to the theme, and they will be merged with the default.
 * @property {ColorSchemeName} [scheme] - Theme color scheme.
 */
interface StateProps<TColors> {
  /**
   * Default theme colors.
   * You can add whatever values you want to the theme, and they will be merged with the default.
  */
  colors: BaseColors & TColors;

  /** Theme colorScheme {@link ColorSchemeName} */
  scheme?: ColorSchemeName;
};


/** ThemeContext for handling colors and scheme change.
 * @template TColors
 * @author Redon Alla <redon.alla@gmail.com>
 */
export default abstract class ThemeProvider<TColors> extends React.PureComponent<ThemeProviderProps<TColors>, StateProps<TColors>> {
  constructor(props: ThemeProviderProps<TColors>) {
    super(props)
    
    this.state = {
      scheme: props.theme.scheme,
      colors: props.theme.colors ?? defaultColors(props.theme.scheme)
    }
  }

  async componentDidMount() {
    await this.onLoad();
  }

  /**
  * This method it is called on `componentDidMount`.
    You can store your themes in a database, local storage, or any other storage.
    and this method it is used to write the logic for reading the theme from your storage and render on your app.
    @see Example <https://redonalla.github.io/flexnative/docs/theme/examples>
  * @return Promise of type void {Promise<void>}
  */
  abstract onLoad(): Promise<void>;

  /**
  * This method it is used to change ColorSchemeName of your app.
  * @param colorScheme
  * Returns a Promise so you can write the logic for storing your ColorSchemeName in your storage.
  */
  abstract onChangeColorScheme(colorScheme: ColorSchemeName): Promise<void>;

  /**
   * This method it is used to change theme of your app.
   * @param {BaseColors & TColors} theme
   * Returns a Promise so you can write the logic for storing your theme in your preferred storage.
   */
  abstract onChangeTheme(theme: BaseTheme<TColors>): Promise<void>;

  render() {
    return (
      <ThemeContext.Provider value={{
        ...createTheme<TColors>({
          ...this.props.theme,
          scheme: this.state.scheme,
          colors: this.state.colors,
        }),
        setTheme: this.onChangeTheme.bind(this),
        setColorScheme: this.onChangeColorScheme.bind(this),
      }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}