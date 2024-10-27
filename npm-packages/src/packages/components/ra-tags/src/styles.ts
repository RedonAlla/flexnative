/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-31 00:42:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 23:30:10
 * @ Description: Styles for Tag component.
 */

import { StyleSheet, ColorValue } from "react-native";

import { BASE_SIZE } from "@flexnative/ui-constants";
import { BaseTheme } from "@flexnative/theme-context";

import { BorderWidth, TagColor, TagRadius, TagSize, TagType } from "./props";
import { getBackgroundColor, getBorderRadius, getBorderWidth, getTextColor, getTextSize } from "./utilities";
import { PADDING_HORIZONTAL, PADDING_VERTICAL } from "./constants";


export default (props: {
  type: TagType,
  color: TagColor,
  size: TagSize,
  radius: TagRadius,
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
  const actionWidth = 1.18 * fontSize;
  const textColor = getTextColor(props.theme.isLight, props.color, props.type, props.theme.colors, props.textColor);

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: PADDING_VERTICAL,
      paddingHorizontal: PADDING_HORIZONTAL,
      borderRadius: getBorderRadius(props.radius),
      borderWidth: getBorderWidth(props.borderWidth!),
      borderColor: props.borderColor || textColor,
      backgroundColor: getBackgroundColor(props.color, props.theme.colors, props.type, props.backgroundColor),
    },
    text: {
      fontFamily: 'Regular',
      fontSize: fontSize,
      color: textColor
    },
    delete: {
      color: '#fff',
      fontSize: 0.67 * fontSize,
      width: 0.7 * fontSize,
      height: 0.7 * fontSize
    },
    deleteButton: {
      width: actionWidth,
      height: actionWidth,
      borderRadius: actionWidth / 2,
      marginLeft: 0.6 * BASE_SIZE,
      justifyContent: 'center',
      alignItems: 'center',
      //@ts-ignore
      cursor: 'pointer'
    }
  });
}