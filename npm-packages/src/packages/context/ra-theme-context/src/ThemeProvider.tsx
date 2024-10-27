/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-06-04 21:29:02
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 13:06:47
 * @ Description: Theme Provider
 */

import React from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

import { light, dark } from './colors';
import ThemeContext from './ThemeContext';
import { BaseTheme, ThemeProviderProps } from './types';


interface StateProps<TColors> {
  colors: BaseTheme & TColors;
  colorScheme?: ColorSchemeName;
};


/**
  * Return default theme.
  * @param colorScheme
  * @return default theme colors according device ColorSchemeName.
*/
function GetDefaultTheme<TColors>(colorSchemeName: ColorSchemeName): BaseTheme & TColors {
  return colorSchemeName === 'dark' ? dark as (BaseTheme & TColors) : light as (BaseTheme & TColors);
}


/**
 * @template TColors
 * @author Redon Alla <redon.alla@gmail.com>
 */
export default abstract class ThemeProvider<TColors> extends React.PureComponent<ThemeProviderProps<TColors>, StateProps<TColors>> {
  constructor(props: ThemeProviderProps<TColors>) {
    super(props)
    /** @type {StateProps<TColors>} */
    this.state = {
      colors: props.colors ?? GetDefaultTheme<TColors>(Appearance.getColorScheme())
    }
  }

  async componentDidMount() {
    await this.onLoad();
  }

  /**
  * This method it is called on `componentDidMount`.
    You can store your themes on Data Base, on Local Storage or any where you want
    and this method it is used to write the logic for reading the theme from your storage and render on your app.
    @see Example <http://localhost:3000/docs/theme/ra-theme-multiple-themes>
  * @return Promise of type void {Promise<void>}
  */
  abstract onLoad(): Promise<void>;

  /**
  * This method it is used to change ColorSchemeName of your app.
  * @param colorScheme
  * @return Promise so you can write the logic for storing your ColorSchemeName on you storage.
  */
  abstract onChangeColorSchemeTheme(colorScheme: ColorSchemeName): Promise<void>;

  /**
   * This method it is used to change theme of your app.
   * @param {BaseTheme & TColors} theme
   * @return Promise so you can write the logic for storing your theme on you preferred storage.
   */
  abstract onChangeTheme(theme: BaseTheme & TColors): Promise<void>;

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          setTheme: this.onChangeTheme,
          setColorScheme: this.onChangeColorSchemeTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}