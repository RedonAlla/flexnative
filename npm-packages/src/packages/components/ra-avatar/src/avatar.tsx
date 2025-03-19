/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-11-03 21:50:51
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-18 23:24:20
 * @ Description: Avatar component used to represent users or things, supporting the display of images, icons, or characters.
 */

import React from 'react';
import { Image } from 'expo-image';
import { ImageStyle, StyleProp, Text, TextStyle } from 'react-native';

import { IconName, icons } from '@flexnative/icons';
import { useThemeState } from '@flexnative/theme-context';

import { AvatarProps } from './props';
import applyStyle from './styles';


/**
 * A React PureComponent that renders an avatar component with various customization options.
 * 
 * @remarks
 * This component supports three types of avatars: image, icon, and text. The appearance of the avatar
 * can be customized using various props such as `fillMode`, `radius`, `size`, `color`, `borderWidth`, 
 * `borderColor`, `backgroundColor`, `textColor`, `iconColor`, and `style`.
 * 
 * @defaultProps
 * - `fillMode`: 'solid'
 * - `radius`: 'full'
 * - `size`: 'medium'
 * - `theme`: 'default'
 * - `borderWidth`: 'none'
 * - `type`: 'image'
 * - `color`: 'default'
 * 
 * @context
 * This component uses the `ThemeContext` to apply theme-based styles.
 * 
 * @prop {string} fillMode - The fill mode of the avatar. Can be 'solid' or other custom values.
 * @prop {string} radius - The border radius of the avatar. Can be 'full' or other custom values.
 * @prop {string} size - The size of the avatar. Can be 'small', 'medium', 'large', etc.
 * @prop {string} type - The type of the avatar. Can be 'image', 'icon', or 'text'.
 * @prop {string} color - The color of the avatar.
 * @prop {string} borderWidth - The width of the avatar's border.
 * @prop {string} borderColor - The color of the avatar's border.
 * @prop {string} backgroundColor - The background color of the avatar.
 * @prop {string} text - The text to be displayed in the avatar (if type is 'text').
 * @prop {string} textColor - The color of the text in the avatar.
 * @prop {string} icon - The icon to be displayed in the avatar (if type is 'icon').
 * @prop {string} iconColor - The color of the icon in the avatar.
 * @prop {object} style - Additional styles to be applied to the avatar.
 * @prop {object} restProps - Additional props to be passed to the avatar component.
 * 
 * @returns
 * Renders an avatar component based on the provided props and context.
 */
const Avatar: React.FC<AvatarProps> = (props) => {
  const {
    fillMode = 'solid',
    radius = 'full',
    size = 'medium',
    type = 'image',
    color = 'default',
    borderWidth = 'none',
    borderColor,
    backgroundColor,
    text,
    textColor,
    icon,
    iconColor,
    style,
    ...restProps
  } = props;

  const theme = useThemeState();

  const styles = React.useMemo(() => {
    return applyStyle(
      {
        size: size,
        color: color,
        fillMode: fillMode,
        radius,
        borderWidth,
        borderColor,
        backgroundColor,
        textColor,
        iconColor,
      },
      theme
    );
  }, [
    size,
    color,
    fillMode,
    radius,
    borderWidth,
    borderColor,
    backgroundColor,
    textColor,
    iconColor,
    theme,
  ]);

  switch (type) {
    case 'image':
      return (
        <Image
          style={[styles.container, style as ImageStyle]}
          contentFit="fill"
          transition={1000}
          {...restProps}
        />
      );
    case 'icon':
      return (
        <Text
          selectionColor={theme.colors.primary}
          style={[styles.container, styles.icon, style as StyleProp<TextStyle>]}
          {...restProps}
        >
          {icons[icon as keyof IconName] as string}
        </Text>
      );
    case 'text':
      return (
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          ellipsizeMode="tail"
          selectionColor={theme.colors.primary}
          style={[styles.container, styles.text, style as StyleProp<TextStyle>]}
          {...restProps}
        >
          {text}
        </Text>
      );
    default:
      throw new Error(`Avatar: Invalid type prop: ${type}`);
  }
};

export default Avatar;