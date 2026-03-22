import { ColorValue, TextProps } from "react-native";
import { BorderRadius, Color, FontSize } from '@flexnative/theme-context';

export interface IconProps extends TextProps {
  /**
   * Name of the icon.
   * Matches the key in the provided icon set.
   */
  name: string;

  /**
   * Size of the icon.
   * Values from the theme's `fontSize` or a numeric value.
   * @default 'md'
   */
  size?: FontSize;

  /**
   * Color of the icon.
   * Values from the theme's `colors` or a string color value.
   * @default 'text'
   */
  color?: Color;

  /**
   * Border radius for the icon background.
   * Values from the theme's `borders.radius` or a numeric value.
   */
  borderRadius?: BorderRadius;

  /**
   * Background color of the icon.
   * @default 'transparent'
   */
  backgroundColor?: ColorValue;
}

export interface IconContextValue {
  /**
   * A map of icon names to their character codes or glyphs.
   */
  icons?: Record<string, string>;
};

export interface IconProviderProps extends IconContextValue {
  /**
   * The children to render within the provider.
   */
  children: React.ReactNode;
}