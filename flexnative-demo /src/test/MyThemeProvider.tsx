import { ColorSchemeName, Appearance } from 'react-native';
import { Storage } from '@flexnative/utilities';

// highlight-next-line
import { BaseTheme, ThemeProvider } from '@flexnative/theme-context';
import { MyThemeColors, ThemeStoreProps } from './props';
import { APP_THEME, defaultThemeStored, themes } from './constants';

const getThemeColors = (themeStored: ThemeStoreProps): MyThemeColors => {
  const colorScheme = themeStored.colorScheme ?? 'light';
  const themeName = colorScheme + themeStored.themeName;
  const themeColors = themes[themeName as keyof typeof themes];

  if (!themeColors) {
    throw new Error(`Theme ${themeStored.themeName} not found`);
  }
  return themeColors;
}

export default class MyThemeProvider extends ThemeProvider<MyThemeColors, ThemeStoreProps> {
  // Here you can implement your logic to get inital theme
  // if you are storing your theme in persistent memory (db or local storage).
  async onLoad(): Promise<void> {
    const appThemeStorage = await Storage.getItem(APP_THEME, defaultThemeStored);
    Appearance.addChangeListener(this.onAppearanceChange);

    this.setState({
      themeName: appThemeStorage.themeName,
      colorScheme: appThemeStorage.colorScheme,
      theme: {
        ...this.state.theme,
        colors: getThemeColors(appThemeStorage)
      } as BaseTheme<MyThemeColors>
    });

    //In this example we are change only the colors
    // but you can change the whole theme object use:
    //this.onChangeTheme(appThemeStorage);
  }

  onAppearanceChange = async (scheme: Appearance.AppearancePreferences) => {
    if(this.state.theme?.scheme === null) {
      this.setState({ ...this.state });
    }
    else {
      let appThemeStorage = await Storage.getItem(APP_THEME, defaultThemeStored);
      appThemeStorage.colorScheme = scheme.colorScheme;
      await Storage.saveItem(APP_THEME, appThemeStorage);

      this.setState({
        colorScheme: appThemeStorage.colorScheme,
        theme: {
          ...this.state.theme,
          colors: getThemeColors(appThemeStorage)
        } as BaseTheme<MyThemeColors>
      });
    }
  }

  onChangeColorScheme = async (scheme: ColorSchemeName): Promise<void>  => {
    let appThemeStorage = await Storage.getItem(APP_THEME, defaultThemeStored);
    appThemeStorage.colorScheme = scheme;
    await Storage.saveItem(APP_THEME, appThemeStorage);

    this.setState({
      colorScheme: appThemeStorage.colorScheme,
      theme: {
        ...this.state.theme,
        colors: getThemeColors(appThemeStorage)
      } as BaseTheme<MyThemeColors>
    });
  }

  onChangeTheme = async (themeName: any): Promise<void> => {
    let appThemeStorage = await Storage.getItem(APP_THEME, defaultThemeStored);
    appThemeStorage.themeName = themeName;
    await Storage.saveItem(APP_THEME, appThemeStorage);

    this.setState({
      themeName: appThemeStorage.themeName,
      theme: {
        ...this.state.theme,
        colors: getThemeColors(appThemeStorage)
      } as BaseTheme<MyThemeColors>
    });
  }
}