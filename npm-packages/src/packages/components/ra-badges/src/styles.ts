/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-01 00:00:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-12 21:26:35
 * @ Description: Badge styles.
 */

import { StyleSheet, ColorValue } from "react-native";

import { BadgePosition, Position } from "./props";
import { PADDING_MULTIPLIER, POSITION } from "./constants";
import { isString } from "./utilities";

type StyleProps = {
  baseSize: number,
  fontSize: number,
  borderRadius: number,
  position: BadgePosition | Position,
  textColor?: ColorValue,
  borderWidth?: number,
  borderColor?: ColorValue;
  backgroundColor?: ColorValue,
}

/**
 * Generates a stylesheet for the badge component based on the provided style properties.
 *
 * @param props - The style properties for the badge component.
 * @returns The generated stylesheet.
 *
 * @typedef {Object} StyleProps
 * @property {number} baseSize - The base size for padding calculation.
 * @property {number} borderRadius - The border radius of the badge.
 * @property {number} borderWidth - The border width of the badge.
 * @property {string} borderColor - The border color of the badge.
 * @property {string} backgroundColor - The background color of the badge.
 * @property {BadgePosition | Position} position - The position of the badge.
 * @property {number} fontSize - The font size of the badge text.
 * @property {string} textColor - The color of the badge text.
 */
export default (props: StyleProps) => {
  return StyleSheet.create({
    container: {
      position: 'relative'
    },
    text: {
      position: 'absolute',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: props.baseSize * PADDING_MULTIPLIER,
      borderRadius: props.borderRadius,
      borderWidth: props.borderWidth,
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,
      fontFamily: 'Bold',
      fontSize: props.fontSize,
      color: props.textColor,
      ...(isString(props.position) ? POSITION[props.position as BadgePosition] : props.position as Position)
    }
  });
}