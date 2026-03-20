import { ColorValue, TextProps } from "react-native";
import { BorderRadius, Color, FontSize } from '@flexnative/theme-context';

export interface IconProps extends TextProps {
  name: string;
  size?: FontSize;
  color?: Color;
  borderRadius?: BorderRadius;
  backgroundColor?: ColorValue;
}

export interface IconContextValue {
  icons?: Record<string, string>;
};

export interface IconProviderProps extends IconContextValue {
  children: React.ReactNode;
}