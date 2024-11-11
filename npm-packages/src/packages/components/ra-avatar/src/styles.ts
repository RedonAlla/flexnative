/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-10 21:22:33
 * @ Description: Styles applied in to Avatar component.
 */

import { ColorValue, StyleSheet } from 'react-native';
import { Sizes } from '@flexnative/theme-context';

import { AVATAR_SIZES } from './constants';


/**
 * Properties for styling an avatar item.
 * 
 * @typedef {Object} AvatarItemStyleProps
 * @property {Sizes} size - The size of the avatar.
 * @property {ColorValue} color - The color of the avatar.
 * @property {number} radius - The border radius of the avatar.
 * @property {number} [borderWidth] - The width of the border around the avatar.
 * @property {ColorValue} [borderColor] - The color of the border around the avatar.
 * @property {ColorValue} [backgroundColor] - The background color of the avatar.
 * @property {ColorValue} [textColor] - The color of the text inside the avatar.
 * @property {ColorValue} [iconColor] - The color of the icon inside the avatar.
 */
type AvatarItemStyleProps = {
  size: Sizes;
  color: ColorValue;
  radius: number;
  borderWidth?: number;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  iconColor?: ColorValue;
}

/**
 * Properties for styling an avatar group component.
 */
type AvatarGroupStyleProps = {
  /**
   * Padding between items in the avatar group.
   */
  itemPadding: number;

  /**
   * Width of the border around each item in the avatar group.
   * Optional.
   */
  itemBorderWidth: number;

  /**
   * Color of the border around each item in the avatar group.
   * Optional.
   */
  itemBorderColor?: ColorValue;
}

/**
 * Applies styles to an avatar component based on the provided properties.
 *
 * @param {AvatarItemStyleProps} props - The properties to apply styles.
 * @param {string | number} props.size - The size of the avatar, either a predefined size key or a custom size.
 * @param {string} props.backgroundColor - The background color of the avatar.
 * @param {string} [props.borderColor] - The border color of the avatar. Defaults to the value of `props.color` if not provided.
 * @param {string} props.color - The default color used for the border if `props.borderColor` is not provided.
 * @param {number} props.radius - The border radius of the avatar.
 * @param {number} props.borderWidth - The border width of the avatar.
 * @param {string} props.textColor - The color of the text inside the avatar.
 * @param {string} props.iconColor - The color of the icon inside the avatar.
 * @returns {object} The styles object to be used with a StyleSheet.
 */
export default function applyStyle(props: AvatarItemStyleProps) {
  const size = AVATAR_SIZES[props.size] ?? props.size;
  
  return StyleSheet.create({
    container: {
      width: size,
      height: size,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.backgroundColor,
      borderColor: props.borderColor || props.color,
      borderRadius: props.radius,
      borderWidth: props.borderWidth,
      borderStyle: 'solid'
    },
    text: {
      fontFamily: 'Medium',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: props.textColor
    },
    icon: {
      fontFamily: 'Icons',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: props.iconColor,
      fontSize: size / 2
    },
  });
}

/**
 * Applies styles to an avatar group.
 *
 * @param props - The properties used to style the avatar group.
 * @returns The styles for the avatar group.
 *
 * @typedef {Object} AvatarGroupStyleProps
 * @property {number} itemPadding - The padding between avatar items.
 * @property {string} itemBorderColor - The border color of avatar items.
 * @property {number} itemBorderWidth - The border width of avatar items.
 */
export function applyGroupStyle(props: AvatarGroupStyleProps) {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      marginStart: props.itemPadding
    },
    item: {
      borderRadius: 50,
      marginStart: -1 * props.itemPadding,
      borderColor: props.itemBorderColor,
      borderWidth: props.itemBorderWidth,
    }
  });
}