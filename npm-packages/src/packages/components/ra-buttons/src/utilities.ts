import { ColorValue } from "react-native";
import { BaseTheme } from "@flexnative/theme-context";


import { BorderRadius, BorderWidth, ButtonType, ButtonColor, Sizes } from "./props";
import {
  BLACK_TEXT_COLOR,
  BUTTON_PADDING_HORIZONTAL_MULTIPLIER,
  BUTTON_PADDING_VERTICAL_MULTIPLIER,
  DARK_OVERLAY,
  GHOST_ACTIVE_TRANSPARENCY,
  GHOST_TRANSPARENCY,
  LIGHT_OVERLAY,
  WHITE_TEXT_COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_SIZE
} from "@flexnative/ui-constants";


/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {ColorValue} color - user selected color.
 * @param {ButtonType} type - user preferred button type.
 * @returns {ColorValue}
 */
export function getBackgroundColor(color: ColorValue, type?: ButtonType): ColorValue {
  switch (type) {
    case 'default':
      return color;

    case 'ghost':
      return `${color.toString()}${GHOST_TRANSPARENCY}`;

    case 'inverse':
    case 'link':
    case 'text':
      return 'transparent';
      
    default:
      return color;
  }
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {ColorValue} color - user selected color.
 * @param {ButtonType} type - user preferred button type.
 * @returns {ColorValue}
 */
export function getBackgroundColorActive(color: ColorValue, type?: ButtonType): ColorValue {
  switch (type) {
    case 'default':
    case 'inverse':
      return color;

    case 'ghost':
        return `${color.toString()}${GHOST_ACTIVE_TRANSPARENCY}`;

    case 'link':
    case 'text':
      return 'transparent';
      
    default:
      return color;
  }
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {Color} color - user selected color.
 * @param {BaseTheme} theme - colors from selected theme.
 * 
 * @returns {ColorValue}
 */
export function getColor(color: ButtonColor, theme: BaseTheme): ColorValue {
  switch (color) {
    case 'default':
      return theme.default;

    case 'primary':
      return theme.primary;

    case 'secondary':
      return theme.secondary;

    case 'info':
      return theme.info;

    case 'success':
      return theme.success;

    case 'warning':
      return theme.warning;

    case 'error':
      return theme.error;

    case 'dark':
      return theme.dark;

    case 'light':
      return theme.light;
  
    default:
      return color;
  }
}

/**
 * extract the color from theme by property
 * if there's no theme property in the theme, return the value
 * 
 * @param {boolean} isLight - Boolean if Color Scheme it is in light mode.
 * @param {Color} color - user selected color.
 * @param {ButtonType} buttonType - user selected button type.
 * @param {BaseTheme} theme - colors from selected theme.
 * 
 * @returns {ColorValue}
 */
export function getTextColor(isLight: boolean, color: ButtonColor, buttonType: ButtonType, theme: BaseTheme) {
  if(Boolean(color === 'light' || color === 'secondary'))
    return BLACK_TEXT_COLOR;

  return Boolean(isLight && color === 'default')
    ? BLACK_TEXT_COLOR
    : buttonType === 'default'
      ? WHITE_TEXT_COLOR
      : getColor(color, theme)
}

/**
 * Get overlay color based on button prop.
 * 
 * @param {boolean} isDark - value if SchemeColor it is dark mode or not.
 * @param {Color} color - user selected color.
 * @param {BaseTheme} theme - colors from selected theme.
 * @param {ButtonType} buttonType - user selected button type.
 * 
 * @returns {ColorValue}
 */
export const getOverlayColor = (isDark: boolean, color: ButtonColor, theme: BaseTheme, type?: ButtonType): ColorValue => {
  if(type === 'default') {
    return isDark
      ? LIGHT_OVERLAY
      : DARK_OVERLAY;
  }

  const backgroundColor = getColor(color, theme);

  switch (type) {
    case 'ghost':
      return `${backgroundColor.toString()}${GHOST_ACTIVE_TRANSPARENCY}`;

    case 'inverse':
      return backgroundColor;

    case 'link':
    case 'text':
      return `${backgroundColor.toString()}${GHOST_TRANSPARENCY}`;
      
    default:
      return color;
  }
}

/**
 * Get border radius based on button prop.
 * 
 * @param {BorderRadius} radius - user preferred border radius.
 * 
 * @returns {number}
 */
export function getBorderRadius(radius: BorderRadius): number {
  switch (radius) {
    case 'none':
      return BORDER_RADIUS.none;

    case 'small':
      return BORDER_RADIUS.small;
      
    case 'medium':
      return BORDER_RADIUS.medium;

    case 'large':
      return BORDER_RADIUS.large;

    case 'full':
      return BORDER_RADIUS.full;
  
    default:
      return radius;
  }
}

/**
 * Get border width based on button prop.
 * 
 * @param {BorderWidth} width - user preferred border radius.
 * 
 * @returns {number}
 */
export function getBorderWidth(width?: BorderWidth): number {
  switch (width) {
    case 'none':
      return BORDER_WIDTH.none;

    case 'hairline':
      return BORDER_WIDTH.hairline;

    case 'base':
      return BORDER_WIDTH.base;

    case 'thick':
      return BORDER_WIDTH.thick;

    case 'thin':
      return BORDER_WIDTH.thin;
  
    default:
      return width as number;
  }
}

/**
 * Get text size based on button prop.
 * 
 * @param {Sizes} size - user preferred button size.
 * 
 * @returns {number}
 */
export function getTextSize(size?: Sizes): number {
  switch (size) {
    case 'small':
      return FONT_SIZE.small;
    case 'default':
      return FONT_SIZE.default;
    case 'medium':
      return FONT_SIZE.medium;
    case 'large':
      return FONT_SIZE.large;
    default:
      return FONT_SIZE.default;
  }
}

/**
 * Get button horizontal based on button size prop.
 * 
 * @param {Sizes} size - user preferred button size.
 * 
 * @returns {number}
 */
export const getPaddingHorizontal = (size?: Sizes): number => getTextSize(size) * BUTTON_PADDING_HORIZONTAL_MULTIPLIER;

/**
 * Get button vertical based on button size prop.
 * 
 * @param {Sizes} size - user preferred button size.
 * 
 * @returns {number}
 */
export const getPaddingVertical = (size?: Sizes): number => getTextSize(size) * BUTTON_PADDING_VERTICAL_MULTIPLIER;

/**
 * Check if a value it is a string or not.
 * 
 * @param value 
 * @returns true if value it is string otherwise false.
 */
export function isString<Type>(value?: Type): boolean {
  return typeof value === 'string';
}