/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-25 20:29:41
 * @ Description: Styles for Tag component.
 */

import { StyleSheet, ColorValue } from "react-native";

import { BaseTheme, BorderRadius, BorderWidth, Color, Sizes } from "@flexnative/theme-context";

import { TagType } from "./props";
import { getBackgroundColor, getTextColor } from "./utilities";
import { ACTION_WIDTH_MULTIPLIER, HORIZONTAL_PADDING_MULTIPLIER, VERTICAL_PADDING_MULTIPLIER } from "./constants";

/**
 * Creates a stylesheet for Tag's components with customizable styles.
 *
 * @param props - The properties to customize the styles.
 * @param props.type - The type of tag.
 * @param props.color - Color used for the Tag component.
 * @param props.size - The font size or overall size of the tag.
 * @param props.radius - The border radius for the tag's rounded corners.
 * @param props.textColor - Optional custom text color.
 * @param props.borderWidth - Optional custom border width.
 * @param props.borderColor - Optional custom background color.
 * @param props.theme - The theme object containing styles and colors.
 *
 * @returns A StyleSheet object containing the styles for background, text, and action.
 */
export default (props: {
  type: TagType,
  color: Color,
  size: Sizes,
  radius: BorderRadius,
  textColor?: ColorValue,
  borderWidth?: BorderWidth,
  borderColor?: ColorValue;
  backgroundColor?: ColorValue,
  theme: BaseTheme<any>
}) => {
  /**
   * Retrieves the theme color or defaults to the provided color.
   */
  const themeColor = props.theme.colors[props.color] ?? props.color;

  /**
   * Determines the font size from the theme or uses the provided size.
   */
  const fontSize = props.theme.fontSize[props.size] ?? props.size as number;

  /**
   * Calculates the width of action-related elements based on font size.
   */
  const actionWidth = ACTION_WIDTH_MULTIPLIER * fontSize;

  /**
   * Gets the appropriate text color considering the theme and type.
   */
  const textColor = getTextColor(
    props.color,
    themeColor,
    props.type,
    props.theme.colors.black,
    props.theme.scheme === 'light'
  );

  /**
   * Determines the background color based on theme and type.
   */
  const backgroundColor = getBackgroundColor(
    themeColor, 
    props.theme.metrics.ghostOpacity, 
    props.type
  );
  
  /**
   * Returns a StyleSheet object for styling components.
   */
  return StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: props.theme.metrics.baseSize * VERTICAL_PADDING_MULTIPLIER,
      paddingHorizontal: props.theme.metrics.baseSize * HORIZONTAL_PADDING_MULTIPLIER,
      borderRadius: props.theme.borderRadius[props.radius] ?? props.radius,
      borderWidth: props.theme.borderWidth[props.borderWidth!] ?? props.borderWidth as number,
      borderColor: props.borderColor || textColor,
      backgroundColor: props.backgroundColor ?? backgroundColor,
    },
    text: {
      //height: fontSize,
      fontFamily: 'Regular',
      fontSize: fontSize,
      color: textColor,

      justifyContent: 'center',
      alignItems: 'center',
    },
    delete: {
      color: textColor,
      fontSize: actionWidth,
      width: actionWidth,
      height: actionWidth,
    },
    deleteButton: {
      backgroundColor: 'transparent',
      marginLeft: HORIZONTAL_PADDING_MULTIPLIER * props.theme.metrics.baseSize,
      justifyContent: 'center',
      alignItems: 'center',
      //@ts-ignore
      cursor: 'pointer'
    }
  });
}