/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-05 21:58:52
 * @ Description: Theme Provider
 */

import React from 'react';
import { ColorSchemeName } from 'react-native';

import ThemeContext from './ThemeContext';
import { BaseColors, BaseTheme, ThemeProviderProps } from './props';
import { createTheme, defaultColors } from './utilities';


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
      scheme: props.scheme,
      colors: props.colors ?? defaultColors(props.scheme)
    }
  }

  async componentDidMount() {
    await this.onLoad();
  }

  /**
  * This method it is called on `componentDidMount`.
    You can store your themes on Data Base, on Local Storage or any where you want
    and this method it is used to write the logic for reading the theme from your storage and render on your app.
    @see Example <https://redonalla.github.io/flexnative/docs/theme/examples>
  * @return Promise of type void {Promise<void>}
  */
  abstract onLoad(): Promise<void>;

  /**
  * This method it is used to change ColorSchemeName of your app.
  * @param colorScheme
  * @return Promise so you can write the logic for storing your ColorSchemeName on you storage.
  */
  abstract onChangeColorScheme(colorScheme: ColorSchemeName): Promise<void>;

  /**
   * This method it is used to change theme of your app.
   * @param {BaseColors & TColors} theme
   * @return Promise so you can write the logic for storing your theme on you preferred storage.
   */
  abstract onChangeTheme(theme: BaseTheme<TColors>): Promise<void>;

  render() {
    return (
      <ThemeContext.Provider
        value={createTheme(Object.assign(
          {},
          this.props,
          {
            scheme: this.props.scheme,
            colors: this.props.colors
          }
        ))}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}