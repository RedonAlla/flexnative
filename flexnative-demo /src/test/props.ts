import { ColorSchemeName, ColorValue } from 'react-native';
// highlight-next-line
import { BaseColors } from '@flexnative/theme-context';


export interface MyExtraColorsProps {
  color1: ColorValue,
  color2: ColorValue
};

export interface ThemeStoreProps {
  themeName: string,
  colorScheme: ColorSchemeName
};

export type MyThemeColors = BaseColors & MyExtraColorsProps;