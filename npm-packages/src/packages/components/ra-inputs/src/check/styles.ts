/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Functions for creating styles for CheckBox component.
 */

import { ColorValue, StyleSheet } from 'react-native';

import { BaseTheme, BorderRadius, BorderWidth, Color, Sizes } from '@flexnative/theme-context';

import { CheckType } from './props';
import { CHECK_CONTAINER_SIZE_MULTIPLIER, PADDING_VERTICAL_MULTIPLIER, WHITE_TEXT_COLOR } from '../input.constants';


/**
 * Props that specifies the properties needed for styling CheckBox components.
 */
type StyleProps = {
  /**
   * The type of check, which influences the visual style ( "outlined" | "solid" | "inverse" | "ghost").
   */
  type: CheckType;

  /**
   * The primary color used for styling different elements of the component.
   */
  color: Color;

  /**
   * The size of the component, which can affect dimensions and font size.
   */
  size: Sizes;

  /**
   * Specifies the border radius, influencing the roundness of component corners.
   */
  radius: BorderRadius;

  /**
   * Specifies the border width. It is optional and may have a default value if not provided.
   */
  borderWidth?: BorderWidth;

  /**
   * A boolean indicating whether the component is disabled, impacting its interaction and appearance.
   */
  disabled?: boolean;

  /**
   * The color of the border when the component is in an unchecked state. This property is optional.
   */
  borderColor?: ColorValue;

  /**
   * The color of the border when the component is in a checked state.
   */
  checkedBorderColor: ColorValue;

  /**
   * The background color when the component is in an unchecked state. This property is optional.
   */
  backgroundColor?: ColorValue;

  /**
   * The background color when the component is in an unchecked state. This property is optional.
   */
  checkedBackgroundColor?: ColorValue;

  /**
   * The theme object containing various design tokens utilized for styling, such as colors, fonts, metrics, etc.
   */
  theme: BaseTheme<any>;
}

/**
 * This module defines a function `createStyles` that generates a set of styles for a UI component based on the provided properties and a theme. 
 * It calculates various style attributes such as font size, colors, padding, border width, and radius, and returns a StyleSheet object containing styles for different states of the component.
*
 * @param {StyleProps} props 
 * @returns {StyleSheet} - StyleSheet object containing styles for different states of the component
 */
export const createStyles = (props: StyleProps) => {
  /**
   * Determine the font size based on the provided size or default value from the theme.
   */
  const fontSize = props.theme.fontSize[props.size] ?? props.theme.fontSize.default;

  /**
   * Determine the theme color based on the provided color or use a default color value.
   */
  const themeColor = props.theme.colors[props.color] ?? props.color as ColorValue;

  /**
   * Calculate vertical padding using a predefined multiplier and the determined font size.
   */
  const paddingVertical = PADDING_VERTICAL_MULTIPLIER * fontSize;

  /**
   * Set the border width either from the theme or directly from the provided property.
   */
  const borderWidth = props.theme.borderWidth[props.borderWidth!] ?? props.borderWidth as number;
  
  /**
   * Set the border radius either from the theme or directly from the provided property.
   */
  const borderRadius = props.theme.borderRadius[props.radius] ?? props.radius as number;

  /**
   * Calculate container size for check elements using a multiplier and font size.
   */
  const checkContainerSize = fontSize * CHECK_CONTAINER_SIZE_MULTIPLIER;

  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: paddingVertical,
      opacity: props.disabled ? props.theme.metrics.disabledOpacity : 1,
    },
    checkContainer: {
      overflow: 'hidden',
      width: checkContainerSize,
      height: checkContainerSize,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: borderWidth,
      borderRadius: borderRadius,
    },
    checkBox: {
      userSelect: 'none',
      textAlign: 'center',
      fontFamily: 'Icons',
      fontWeight: 'bold',
      alignSelf : "center",
      color: getCheckColor(!props.theme.scheme, themeColor, props.color, props.type, props.theme.colors.black),
    },
    checkBoxChecked: {
      borderColor: props.checkedBorderColor ?? themeColor,
      backgroundColor: Boolean(props.checkedBackgroundColor)
        ? props.checkedBackgroundColor
        : props.type === 'outlined'
            ? 'transparent'
            : props.type === 'ghost'
                ? `${themeColor.toString()}${props.theme.metrics.ghostOpacity}`
                : themeColor,
    },
    checkBoxUnChecked: {
      borderColor: Boolean(props.borderColor) ? props.borderColor : props.type === 'solid' ? props.theme.colors.default : props.theme.colors.border,
      backgroundColor: Boolean(props.backgroundColor) ? props.backgroundColor : props.type === 'solid' ? props.theme.colors.default : 'transparent',
    },
    label: {
      fontSize: fontSize,
      userSelect: 'none',
      fontFamily: 'Regular',
      color: props.theme.colors.text,
    },
  });
}

/**
 * Determines the appropriate check color based on various conditions.
 *
 * @param {boolean} isLight - Indicates if the theme is light.
 * @param {ColorValue} colorValue - The color value to be used.
 * @param {Color} color - The color type.
 * @param {CheckType} type - The type of check.
 * @param {ColorValue} [blackColor='black'] - The default black color value.
 * @returns {ColorValue} - The determined check color.
 */
function getCheckColor(isLight: boolean, colorValue: ColorValue, color: Color, type: CheckType, blackColor: ColorValue = 'black') {
  if(type === 'outlined' || type === 'ghost')
    return colorValue;

  if(Boolean(color === 'secondary'))
    return WHITE_TEXT_COLOR;

  if(Boolean(color === 'light'))
    return blackColor;

  return Boolean(isLight && color === 'default')
    ? blackColor
    : WHITE_TEXT_COLOR
}
