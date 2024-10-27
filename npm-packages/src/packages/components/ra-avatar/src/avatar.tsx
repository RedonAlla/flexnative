/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-11-03 21:50:51
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-19 23:42:37
 * @ Description: Avatar component used to represent users or things, supporting the display of images, icons, or characters.
 */

import React from 'react';
import { Image } from 'expo-image';
import { ImageStyle, Text } from 'react-native';

import { IconName, icons } from '@flexnative/icons';
import ThemeContext from '@flexnative/theme-context';

import { AvatarProps } from './props';
import applyStyle from './styles';


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
        isDark: this.context.colorScheme === 'dark'
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