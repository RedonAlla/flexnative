/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 12:58:46
 * @ Description: Badge styles.
 */

import { StyleSheet, ColorValue } from "react-native";

import { BaseTheme } from "@flexnative/theme-context/dist/types";

import { BorderWidth, BadgeColor, BadgeRadius, BadgeSize, BadgeType, BadgePosition } from "./props";
import { getBackgroundColor, getBorderRadius, getBorderWidth, getPosition, getTextColor, getTextSize } from "./utilities";
import { PADDING } from "./constants";


export default (props: {
  type: BadgeType,
  color: BadgeColor,
  size: BadgeSize,
  radius: BadgeRadius,
  position: BadgePosition,
  textColor?: ColorValue,
  borderWidth?: BorderWidth,
  borderColor?: ColorValue;
  backgroundColor?: ColorValue,
  theme: {
    colors: BaseTheme,
    isLight: boolean
  }
}) => {
  const fontSize = getTextSize(props.size);
  const textColor = getTextColor(props.theme.isLight, props.color, props.type, props.theme.colors, props.textColor);

  return StyleSheet.create({
    container: {
      position: 'relative'
    },
    text: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: PADDING,
      borderRadius: getBorderRadius(props.radius),
      borderWidth: getBorderWidth(props.borderWidth!),
      borderColor: props.borderColor || textColor,
      backgroundColor: getBackgroundColor(props.color, props.theme.colors, props.type, props.backgroundColor),

      position: 'absolute',
      ...getPosition(props.position),

      fontFamily: 'Bold',
      fontSize: fontSize,
      color: textColor
    }
  });
}