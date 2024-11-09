/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-11-03 21:50:51
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-07 19:07:46
 * @ Description: Avatar component used to represent users or things, supporting the display of images, icons, or characters.
 */

import React from 'react';
import { Image } from 'expo-image';
import { ImageStyle, Text } from 'react-native';

import { IconName, icons } from '@flexnative/icons';
import ThemeContext from '@flexnative/theme-context';

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
export default class extends React.PureComponent<AvatarProps, {}> {
  static defaultProps = {
    fillMode: 'solid',
    radius: 'full',
    size: 'medium',
    theme: 'default',
    borderWidth: 'none',
    type: 'image',
    color: 'default'
  }

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  public render() {
    const {
      fillMode,
      radius,
      size,
      type,
      color,
      borderWidth,
      borderColor,
      backgroundColor,
      text,
      textColor,
      icon,
      iconColor,
      style,
      ...restProps
    } = this.props;

    const styles = applyStyle({
      size: size,
      type: type,
      color: color!,
      fillMode: fillMode,
      radius: radius,
      borderWidth: borderWidth,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      textColor: textColor,
      iconColor: iconColor,
      theme: {
        colors: this.context.colors,
        isDark: this.context.scheme === 'dark'
      }
    });

    switch(type) {
      case 'image':
        return (
          <Image style={[styles.container, style as ImageStyle]} contentFit="fill" transition={1000} {...restProps} />
        );
      case 'icon':
        return (
          <Text selectionColor={this.context.colors.primary}
                style={[styles.container, styles.icon, style]}
                {...restProps}>
            {icons[icon as keyof IconName] as string}
          </Text>
        );
      case 'text':
        return (
          <Text adjustsFontSizeToFit={true}
                numberOfLines={1}
                ellipsizeMode='tail'
                selectionColor={this.context.colors.primary}
                style={[styles.container, styles.text, style]}
                {...restProps}>
            {text}
          </Text>
        );
    }
  }
}