import { ColorSchemeName, Appearance, ColorValue } from 'react-native';

import { ThemeProvider, BaseTheme, dark, light } from '@flexnative/theme-context';
import { Storage } from '@flexnative/utilities';

import { APP_THEME } from '@/constants/keys';
import { DEFAULT_PRIMARY_COLOR } from '@/constants/colors';


type DefaultThemeProps = {
  colorScheme: ColorSchemeName,
  primaryColor: ColorValue;
}

const defaultTheme: DefaultThemeProps = {
  colorScheme: Appearance.getColorScheme(),
  primaryColor: DEFAULT_PRIMARY_COLOR
};


function getThemeColors(primaryColor: ColorValue, colorScheme?: ColorSchemeName): BaseTheme {
  if(colorScheme === null || colorScheme === undefined)
    colorScheme = Appearance.getColorScheme();

  return {
    ...(colorScheme === 'dark' ? dark : light),
    primary: primaryColor
  }
}


export default class extends ThemeProvider<BaseTheme> {
  async onLoad(): Promise<void> {
    const appThemeStorage = await Storage.getItem(APP_THEME, defaultTheme);
    Appearance.addChangeListener(this.onAppearanceChange);

    this.setState({
      colorScheme: appThemeStorage.colorScheme,
      colors: getThemeColors(appThemeStorage.primaryColor, appThemeStorage.colorScheme)
    });
  }

  onAppearanceChange = (colorScheme: Appearance.AppearancePreferences) => {
    if(this.state.colorScheme === null) {
      this.setState({ ...this.state });
    }
    else {
      this.setState({
        colorScheme: colorScheme.colorScheme,
        colors: getThemeColors(this.state.colors.primary, colorScheme.colorScheme)
      });
    }
  }

  onChangeTheme = async (theme: BaseTheme): Promise<void> => {
    await Storage.saveItem(APP_THEME, { colorScheme: this.state.colorScheme, primaryColor: theme.primary });
    this.setState({ colors: theme });
  }

  onChangeColorSchemeTheme = async (colorScheme: ColorSchemeName): Promise<void>  => {
    await Storage.saveItem(APP_THEME, { colorScheme: colorScheme, primaryColor: this.state.colors.primary });

    this.setState({
      colorScheme: colorScheme ?? Appearance.getColorScheme(),
      colors: getThemeColors(this.state.colors.primary, colorScheme)
    });
  }
}