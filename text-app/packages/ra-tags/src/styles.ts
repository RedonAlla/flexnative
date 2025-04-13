/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-13 17:24:22
 * @ Description: This file defines the styling logic for the Tag component, including dynamic styles based on props and theme.
 */

import { StyleSheet } from "react-native";

import { BaseTheme, Color } from "@flexnative/theme-context";

import { BaseTagProps } from "./props";
import { getBackgroundColor, getTextColor, getThemeFontSizeKey, getThemeIconSizeKey } from "./utilities";
import { HORIZONTAL_PADDING_MULTIPLIER } from "./constants";


/**
 * Generates the styles for the Tag component based on the provided props and theme.
 *
 * This function dynamically creates a StyleSheet object that defines the appearance of the Tag,
 * including its container, text, and delete icon. It takes into account the Tag's type, size,
 * color, and other properties, as well as the current theme.
 *
 * @param {BaseTagProps} props - The properties of the Tag component.
 * @param {BaseTheme<any>} theme - The current theme object.
 * @returns {StyleSheet.NamedStyles<any>} A StyleSheet object containing the styles for the Tag.
 */
export default (
  props: BaseTagProps,
  theme: BaseTheme<any>
) => {
  /**
   * Retrieves the theme color or defaults to the provided color.
   * If a color is specified in `props.color` and it exists in the theme's colors,
   * that color is used. Otherwise, `props.color` itself is used as the color.
   */
  const themeColor = theme.colors[props.color as keyof Color] ?? props.color;

  /**
   * Determines the size of the icon based on the Tag's size.
   * It uses the `getThemeIconSizeKey` utility function to get the appropriate
   * font size key from the theme, and then retrieves the corresponding size.
   */
  const iconSize = theme.fontSize[getThemeIconSizeKey(props.size)];

  /**
   * Determines the text color based on the Tag's properties and the theme.
   * It uses the `getTextColor` utility function to calculate the appropriate
   * text color, considering the theme's dark mode, the Tag's color, type, and
   * the default black color.
   */
  const textColor = getTextColor(theme.isDark, props.color as keyof Color, themeColor, props.type!, theme.colors.black);
  
  /**
   * Returns a StyleSheet object for styling components.
   *
   * This object contains the styles for the Tag's container, text, delete icon, and delete button.
   * The styles are dynamically generated based on the provided props and theme.
   */
  return StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      overflow: 'hidden',
      gap: Math.round(theme.spaces.xxxs * HORIZONTAL_PADDING_MULTIPLIER),
      paddingVertical: theme.spaces.xxxs,
      paddingHorizontal: Math.round(theme.spaces.xxxs * HORIZONTAL_PADDING_MULTIPLIER),
      borderRadius: theme.borders?.radius![props.radius!] ?? props.radius,
      borderWidth: theme.borders.width![props.borderWidth!] ?? props.borderWidth as number,
      borderColor: props.borderColor || themeColor,
      backgroundColor: props.backgroundColor ?? getBackgroundColor(props.type!, themeColor, theme.colors[`${props.color as string}Subtle`]),
    },
    text: {
      alignSelf: "stretch",
      marginTop: "auto",
      marginBottom: "auto",
      textAlign: 'center',
      userSelect: 'none',
      fontFamily: 'Regular',
      lineHeight: iconSize,
      fontSize: theme.fontSize[getThemeFontSizeKey(props.size)],
      color: props.textColor ?? textColor
    },
    delete: {
      width: iconSize,
      height: iconSize,
      fontSize: iconSize,
      color: textColor
    },
    deleteButton: {
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      //@ts-ignore
      cursor: 'pointer'
    }
  });
}