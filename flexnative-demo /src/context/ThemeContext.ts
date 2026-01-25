// src/theme/MyThemeProvider.tsx
import { ColorSchemeName, Appearance } from 'react-native';
import { ThemeProvider, BaseTheme, BaseColors, defaultTheme } from '@flexnative/theme-context';
import { Storage } from '@flexnative/utilities';


// This is our concrete implementation of the abstract ThemeProvider
export class ThemeContext extends ThemeProvider<{}> {

  // Load theme from AsyncStorage when the app starts
  async onLoad(): Promise<void> {
    try {
      const appThemeStorage = await Storage.getItem('APP_THEME', defaultTheme());
      //Appearance.addChangeListener(this.onAppearanceChange);
      this.setState({ theme: appThemeStorage });
    } catch (error) {
      // Fallback to default theme on error
      this.setState({ theme: defaultTheme() });
    }
  }

  // onAppearanceChange = (scheme: Appearance.AppearancePreferences) => {
  //       if(this.state.scheme === null) {
  //         this.setState({ ...this.state });
  //       }
  //       else {
  //         this.setState({
  //           scheme: scheme.scheme,
  //           colors: getThemeColors(this.state.colors.primary, scheme.scheme)
  //         });
  //       }
  //     }

  // Save the new color scheme and update the theme
  async onChangeColorScheme(colorScheme: ColorSchemeName): Promise<void> {
    if (this.state.theme) {
      const newTheme = { ...this.state.theme, colorScheme };
      this.setState({ theme: newTheme });
      await this.onChangeTheme(newTheme);
    }
  }

  // Save the entire theme object to AsyncStorage
  async onChangeTheme(theme: BaseTheme<{}>): Promise<void> {
    try {
      this.setState({ theme });
      await Storage.saveItem('APP_THEME', theme);
    } catch (error) {
    }
  }

  // Update only the colors of the current theme
  async setColors(colors: BaseColors & {}): Promise<void> {
    if (this.state.theme) {
      const newTheme: BaseTheme<{}> = { ...this.state.theme, colors };
      // `onChangeTheme` handles both state update and persistence
      await this.onChangeTheme(newTheme);
    }
  }
}