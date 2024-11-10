import { ColorSchemeName, Appearance, ColorValue } from 'react-native';

import { ThemeProvider, BaseTheme, dark, light, BaseColors } from '@flexnative/theme-context';

import { MY_PRIMARY_COLOR } from './constants';


type DefaultThemeProps = {
  scheme: ColorSchemeName,
  primaryColor: ColorValue;
}

const defaultTheme: DefaultThemeProps = {
  scheme: Appearance.getColorScheme() ?? 'light',
  primaryColor: MY_PRIMARY_COLOR['red']
};


function getThemeColors(scheme: ColorSchemeName, primaryColor: ColorValue): BaseColors {
  return {
    ...(scheme === 'dark' ? dark : light),
    primary: primaryColor
  }
}

export default class extends ThemeProvider<BaseColors> {
  async onLoad(): Promise<void> {
    Appearance.addChangeListener(this.onAppearanceChange);

    this.setState({
      scheme: defaultTheme.scheme,
      colors: {
        ...this.props.theme.colors,
        primary: defaultTheme.primaryColor
      }
    });
  }

  onAppearanceChange = (colorScheme: Appearance.AppearancePreferences) => {
    if(this.state.scheme === null) {
      this.setState({ ...this.state });
    }
    else {
      this.setState({
        scheme: colorScheme.colorScheme,
        colors: getThemeColors(colorScheme.colorScheme, this.state.colors.primary)
      });
    }
  }

  onChangeTheme = async (theme: BaseTheme<BaseColors>): Promise<void> => {
    this.setState(theme);
  }

  onChangeColorScheme = async (colorScheme: ColorSchemeName): Promise<void>  => {
    this.setState({
      scheme: colorScheme ?? Appearance.getColorScheme(),
      colors: getThemeColors(colorScheme, this.state.colors.primary)
    });
  }
}