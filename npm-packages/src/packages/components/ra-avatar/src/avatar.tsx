/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-11-03 21:50:51
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-22 22:41:52
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
 * A versatile React component for displaying user avatars or representing entities.
 * 
 * @remarks
 * A versatile React component for displaying user avatars or representing entities.
 * It supports three types of content: `images`, `icons`, and `text`. The component's
 * appearance is highly customizable through various props and theme integration.
 * 
 * @component
 * @param {AvatarProps} props - The properties for configuring the Avatar component.
 * @returns {React.ReactElement} An Avatar component instance.
 * 
 * @example
 * // Example usage with an image
 * <Avatar type="image" source={{ uri: 'https://example.com/image.jpg' }} size="large" />
 *
 * @example
 * // Example usage with an icon
 * <Avatar type="icon" icon="user" color="primary" size="medium" />
 *
 * @example
 * // Example usage with text
 * <Avatar type="text" text="RA" size="small" color="secondary" />
 *
 * @property {('image' | 'icon' | 'text')} [props.type='image'] - The type of content to display in the avatar.
 *   - `'image'`: Displays an image from a source.
 *   - `'icon'`: Displays an icon from the `@flexnative/icons` library.
 *   - `'text'`: Displays text within the avatar.
 * @property {string} [props.fillMode='solid'] - The fill mode of the avatar. Determines how the background is filled.
 *   - `'solid'`: A solid background color.
 *   - Other custom values can be used and styled accordingly.
 * @property {string} [props.radius='full'] - The border radius of the avatar.
 *   - `'full'`: A fully rounded avatar (circle).
 *   - Other custom values can be used (e.g., 'none', 'small', 'medium').
 * @property {string | number} [props.size='medium'] - The size of the avatar.
 *   - `'small'`: A small avatar.
 *   - `'medium'`: A medium avatar.
 *   - `'large'`: A large avatar.
 *   - `number`: A custom size in pixels.
 * @property {string} [props.color='default'] - The primary color of the avatar. This can be a theme color or a custom color.
 *   - `'default'`: The default color from the theme.
 *   - `'primary'`, `'secondary'`, `'success'`, `'error'`, etc.: Theme-defined colors.
 *   - `'#RRGGBB'`, `'rgb(r, g, b)'`, `'rgba(r, g, b, a)'`: Custom color strings.
 * @property {string} [props.borderWidth='none'] - The width of the avatar's border.
 *   - `'none'`: No border.
 *   - `'thin'`, `'medium'`, `'thick'`: Theme-defined border widths.
 *   - Custom string values can be used.
 * @property {string} [props.borderColor] - The color of the avatar's border. If not provided, it defaults to the theme's `card` color.
 *   - Theme-defined colors (e.g., `'primary'`, `'secondary'`).
 *   - Custom color strings (e.g., `'#FF0000'`).
 * @property {string} [props.backgroundColor] - The background color of the avatar.
 *   - Theme-defined colors.
 *   - Custom color strings.
 * @property {string} [props.text] - The text to be displayed in the avatar (if `type` is `'text'`).
 * @property {string} [props.textColor] - The color of the text in the avatar.
 *   - Theme-defined colors.
 *   - Custom color strings.
 * @property {IconName} [props.icon] - The name of the icon to be displayed (if `type` is `'icon'`). Must be a valid key from `@flexnative/icons`.
 * @property {string} [props.iconColor] - The color of the icon in the avatar.
 *   - Theme-defined colors.
 *   - Custom color strings.
 * @property {StyleProp<ImageStyle | TextStyle>} [props.style] - Additional styles to be applied to the avatar.
 * @property {object} [props.restProps] - Additional props to be passed to the underlying `Image` or `Text` component.
 * @property {object} [props.source] - The source of the image to be displayed (if `type` is `'image'`).
 *
 * @throws {Error} Throws an error if an invalid `type` prop is provided.
 *
 * @context {ThemeContext} - The theme context used for theming. Provides access to theme colors, border widths, etc.
 *
 * @defaultProps
 * - `fillMode`: 'solid'
 * - `radius`: 'full'
 * - `size`: 'medium'
 * - `type`: 'image'
 * - `color`: 'default'
 * - `borderWidth`: 'none'
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