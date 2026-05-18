import { colors } from "@/constants/colors";
import {
  BaseColors,
  BaseTheme,
  BORDER_RADIUS,
  BORDER_WIDTH,
  dark,
  FONT_SIZE,
  light,
  SPACING,
  ThemeProvider,
} from "@flexnative/theme-context";
import { Storage } from "@flexnative/utilities";
import { Appearance, ColorSchemeName, StyleSheet } from "react-native";

type ThemeProviderState = {
  primaryColor: string;
};

type StoredTheme = {
  scale: number;
  primaryColor: string;
  scheme: ColorSchemeName;
};

const APP_THEME_STORAGE_KEY = "app-theme";

const defaultTheme: StoredTheme = {
  scale: 1,
  primaryColor: "salmon",
  scheme: Appearance.getColorScheme(),
};

function getColors(schema: ColorSchemeName, primaryColorKey: any) {
  const defaultColors = schema === "dark" ? dark : light;

  return {
    ...defaultColors,
    primary: colors[primaryColorKey as keyof typeof colors],
  };
}

function setScale(scale: number): Partial<BaseTheme<ThemeProviderState>> {
  return {
    scale: scale,
    fontSize: {
      xxs: Math.round(FONT_SIZE.xxs * scale),
      xs: Math.round(FONT_SIZE.xs * scale),
      sm: Math.round(FONT_SIZE.sm * scale),
      md: Math.round(FONT_SIZE.md * scale),
      lg: Math.round(FONT_SIZE.lg * scale),
      xl: Math.round(FONT_SIZE.xl * scale),
      xxl: Math.round(FONT_SIZE.xxl * scale),
    },
    borders: {
      width: {
        none: 0,
        hairline: StyleSheet.hairlineWidth,
        thin: Math.round(BORDER_WIDTH.thin * scale),
        base: Math.round(BORDER_WIDTH.base * scale),
        thick: Math.round(BORDER_WIDTH.thick * scale),
      },
      radius: {
        none: 0,
        small: Math.round(BORDER_RADIUS.small * scale),
        medium: Math.round(BORDER_RADIUS.medium * scale),
        large: Math.round(BORDER_RADIUS.large * scale),
        full: 99999,
      },
    },
    spaces: {
      none: 0,
      xxxs: Math.round(SPACING.xxxs * scale),
      xxs: Math.round(SPACING.xxs * scale),
      xs: Math.round(SPACING.xs * scale),
      sm: Math.round(SPACING.sm * scale),
      md: Math.round(SPACING.md * scale),
      default: Math.round(SPACING.default * scale),
      lg: Math.round(SPACING.lg * scale),
      xl: Math.round(SPACING.xl * scale),
      xxl: Math.round(SPACING.xxl * scale),
      xxxl: Math.round(SPACING.xxxl * scale),
    },
  };
}

export default class extends ThemeProvider<BaseColors, ThemeProviderState> {
  async componentDidMount() {
    var storedTheme = await Storage.getItem<StoredTheme>(
      APP_THEME_STORAGE_KEY,
      defaultTheme,
    );

    Appearance.addChangeListener(this.onAppearanceChange);

    const defaultColors = getColors(
      storedTheme.scheme,
      storedTheme.primaryColor,
    );

    const themeScale = setScale(storedTheme.scale);

    this.setState({
      primaryColor: storedTheme.primaryColor,
      theme: {
        ...this.state.theme,
        ...themeScale,
        scheme: storedTheme.scheme,
        colors: defaultColors,
      } as BaseTheme<BaseColors>,
    });
  }

  protected async onScaleChange(scale: number): Promise<void> {
    const newState = {
      scale: scale,
      scheme: this.state.theme?.scheme,
      primaryColor: this.state.primaryColor,
    };

    await Storage.saveItem<StoredTheme>(APP_THEME_STORAGE_KEY, newState);
    const themeScale = setScale(scale);

    this.setState({
      theme: {
        ...this.state.theme,
        ...themeScale,
      } as BaseTheme<BaseColors>,
    });
  }

  protected async onChangeTheme<T>(arg: T): Promise<void> {
    const newState = {
      scale: this.state.theme?.scale!,
      scheme: this.state.theme?.scheme,
      primaryColor: arg as string,
    };

    await Storage.saveItem<StoredTheme>(APP_THEME_STORAGE_KEY, newState);
    const defaultColors = getColors(this.state.theme?.scheme, arg);

    this.setState({
      primaryColor: arg as string,
      theme: {
        ...this.state.theme,
        colors: defaultColors,
      } as BaseTheme<BaseColors>,
    });
  }

  async onChangeColorScheme(scheme: ColorSchemeName): Promise<void> {
    const newState = {
      scheme: scheme,
      scale: this.state.theme?.scale!,
      primaryColor: this.state.primaryColor,
    };

    await Storage.saveItem<StoredTheme>(APP_THEME_STORAGE_KEY, newState);
    const defaultColors = getColors(scheme, this.state.primaryColor);

    this.setState({
      theme: {
        ...this.state.theme,
        colors: defaultColors,
        scheme: scheme,
      } as BaseTheme<BaseColors>,
    });
  }

  onAppearanceChange = (colorScheme: Appearance.AppearancePreferences) => {
    if (this.state.theme?.scheme === null) {
      this.setState({
        theme: { ...this.state.theme },
      });
    } else {
      const defaultColors = getColors(
        colorScheme.colorScheme,
        this.state.primaryColor,
      );

      this.setState({
        theme: {
          ...this.state.theme,
          colors: defaultColors,
          scheme: colorScheme.colorScheme,
        } as BaseTheme<BaseColors>,
      });
    }
  };
}
