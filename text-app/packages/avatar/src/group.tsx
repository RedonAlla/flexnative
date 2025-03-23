/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-22 23:25:17
 * @ Description: AvatarGroup Component - A React component that displays a group of `Avatar` components.
 */

import React, { useMemo } from 'react';
import { View } from 'react-native';

import { BaseColors, useThemeState } from '@flexnative/theme-context';

import Avatar from './avatar';
import { AvatarGroupProps } from './props';
import { applyGroupStyle } from './styles';
import { ITEM_PADDING } from './constants';


/**
 * AvatarGroup Component
 *
 * A React component that displays a group of `Avatar` components. It allows customization of the
 * sorting order, border properties, and padding of the individual avatars within the group.
 *
 * @component
 * @param {AvatarGroupProps} props - The properties passed to the AvatarGroup component.
 * @returns {React.ReactElement} An AvatarGroup component instance.
 *
 * @example
 * ```typescript jsx
 * <AvatarGroup sortIndex="desc" itemBorderWidth="hairline" itemBorderColor="primary" itemPadding={8}>
 *   <Avatar type="image" source={{ uri: 'https://example.com/image1.jpg' }} />
 *   <Avatar type="icon" icon="user" />
 *   <Avatar type="text" text="RA" />
 * </AvatarGroup>
 * ```
 *
 * @property {('asc' | 'desc')} [props.sortIndex='asc'] - The sorting order of the avatar items. 'asc' for ascending (default), 'desc' for descending. This affects the z-index of the avatars, allowing them to overlap in a specific order.
 * @property {string} [props.itemBorderWidth='thick'] - The border width of each avatar item. It can be a predefined value from the theme's border widths (e.g., 'thin', 'medium', 'thick') or a custom string value. Defaults to 'thick'.
 * @property {React.ReactNode} props.children - The `Avatar` components to be displayed in the group. Only `Avatar` components are allowed as children.
 * @property {StyleProp<ViewStyle>} [props.style] - Additional styles to be applied to the container `View` of the group.
 * @property {number} [props.itemPadding=13] - The padding around each avatar item, in pixels. Default is 13.
 * @property {string} [props.itemBorderColor] - The border color for each avatar item. It can be a color name from the theme (e.g., 'primary', 'secondary') or a custom color string (e.g., '#FF0000'). If not provided, it defaults to the 'card' color from the theme.
 * @property {object} [props.restProps] - Additional props to be passed to the container `View`.
 *
 * @throws {Error} Throws an error if a child is not a valid `Avatar` component.
 *
 * @context {ThemeContext} - The theme context used for theming. Provides access to theme colors and border widths.
 */
const AvatarGroup: React.FC<AvatarGroupProps> = ({
  sortIndex = 'asc',
  itemBorderWidth = 'thick',
  children,
  style,
  itemPadding = ITEM_PADDING,
  itemBorderColor,
  ...restProps
}) => {
  const theme = useThemeState();

  const groupContext = useMemo(() => ({
    theme,
    itemPadding,
    itemBorderColor,
    itemBorderWidth,
  }), [theme, itemPadding, itemBorderColor, itemBorderWidth]);

  const styles = useMemo(() => {
    const { itemPadding, itemBorderColor, itemBorderWidth, theme } = groupContext;
    return applyGroupStyle({
      itemPadding: itemPadding,
      itemBorderWidth: theme.borders.width![itemBorderWidth!] ?? itemBorderWidth,
      itemBorderColor: (theme.colors[itemBorderColor! as keyof BaseColors] ?? itemBorderColor) ?? theme.colors.card,
    });
  }, [groupContext]);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child) || child.type !== Avatar) {
        throw new Error(`child ${child} "it is not a valid Avatar item`);
      }
      return (
        <View key={index} style={[styles.item, { zIndex: getIndex(index, sortIndex) }]}>
          {child}
        </View>
      );
    });
  };

  return (
    <View style={[styles.container, style]} {...restProps}>
      {renderChildren()}
    </View>
  );
};

/**
 * Calculates the z-index for an avatar item based on its index and the sorting order.
 *
 * @param {number} index - The index of the avatar item in the group.
 * @param {('asc' | 'desc')} sortIndex - The sorting order ('asc' for ascending, 'desc' for descending).
 * @returns {number} The calculated z-index.
 */
function getIndex(index: number, sortIndex: 'asc' | 'desc'): number {
  return sortIndex === 'asc' ? index : -1 * index;
}

export default AvatarGroup;
