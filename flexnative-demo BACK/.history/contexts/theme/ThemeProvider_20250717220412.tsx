/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-09 18:39:14
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-07-17 22:04:12
 * @ Description: The provided TypeScript React code is an implementation of a theme management system using the `react-native` library. It involves handling color schemes, saving user preferences, and updating the UI accordingly. The code uses a class-based approach extending from `ThemeProvider`.
 */

import { ColorSchemeName, Appearance, ColorValue } from 'react-native';
import { ThemeProvider, BaseTheme, dark, light, BaseColors, defaultColors } from '@flexnative/theme-context';
import { Storage } from '@flexnative/utilities';

import { APP_THEME } from '@/constants/AppKeys';
import { defaultTheme, deviceScheme } from './ThemeProvider.constants';

/**
 * This function determines the color set based on the specified `scheme`
 * (either `dark` or any other value that defaults to `light`) and customizes it with a primary color.
 * 
 * @param {ColorValue} primaryColor - The main color to be applied.
 * @param {ColorSchemeName} scheme - Optional; decides whether dark or light colors should be used.
 * @returns {BaseColors} - An object containing colors customized with the primary color.
 */
function getThemeColors(primaryColor: ColorValue, scheme?: ColorSchemeName): BaseColors {
  if(scheme === null || scheme === undefined)
    scheme = deviceScheme;

  return {
    ...(scheme === 'dark' ? dark : light),
    primary: primaryColor
  }
}

/**
 * ThemeProvider with generic parameter BaseColors.
 * 
 * By using the current device color scheme and a predefined primary color:
 * - **Dynamic Styling**: Ensures that UI components can adjust according to the user's preferred color scheme.
 * - **Consistency**: Provides a consistent starting point for theming across different components or modules within the app.
 */
export default class extends ThemeProvider<BaseColors> {
  setColors(colors: BaseColors): Promise<void> {
    throw new Error('Method not implemented.');
  }
  /**
   * Asynchronously updates the theme when the color scheme changes, saves it in storage,
   * and updates the component's state.
   * @param {ColorSchemeName} scheme 
   */
  async onChangeColorScheme(scheme: ColorSchemeName): Promise<void> {
    await Storage.saveItem(APP_THEME, { colorScheme: scheme, primaryColor: this.state.theme?.colors.primary });

    this.setState({
        theme: Object.assign({}, this.state.theme, {
          scheme,
          colors: getThemeColors(this.state.theme?.colors.primary!, scheme)
      })
    });
  }

  /**
   * Loads the theme from storage during initialization,
   * sets up an appearance change listener, and updates the state with stored values.
   */
  async onLoad(): Promise<void> {
    const appThemeStorage = await Storage.getItem(APP_THEME, defaultTheme);
    Appearance.addChangeListener(this.onAppearanceChange);

    this.setState({
        theme: Object.assign({}, this.state.theme, {
          scheme: appThemeStorage.scheme,
          colors: getThemeColors(appThemeStorage.primaryColor, appThemeStorage.scheme)
      })
    });
  }

  /**
   * Listens for system-wide appearance changes like switching from dark to light mode
   * and updates the component's state accordingly.
   * 
   * @param { Appearance.AppearancePreferences } colorScheme
   */
  onAppearanceChange = (colorScheme: Appearance.AppearancePreferences) => {
    if(this.state.theme?.scheme === null) {
      this.setState({
          theme: Object.assign({}, this.state.theme, {
            scheme: this.state.theme.scheme
        })
      });
    }
    else {
      this.setState({
          theme: Object.assign({}, this.state.theme, {
            scheme: colorScheme.colorScheme,
            colors: getThemeColors(this.state.theme?.colors.primary!, colorScheme.colorScheme)
        })
      });
    }
  }

  /**
   * Updates and saves the current theme's color and stores it persistently.
   * @param {BaseTheme<any>} theme 
   */
  onChangeTheme = async (theme: BaseTheme<any>): Promise<void> => {
    await Storage.saveItem(APP_THEME, { colorScheme: this.state.theme?.scheme, primaryColor: theme.colors.primary });
    this.setState({
          theme: Object.assign({}, this.state.theme, {
            colors: theme.colors
        })
      });
  }
}