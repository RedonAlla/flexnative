/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-19 22:10:59
 * @ Description: Avatar Group component used to represent a list ov Avatar components.
 */

import React from 'react';
import { View } from 'react-native';

import ThemeContext from '@flexnative/theme-context';

import Avatar from './avatar';
import { AvatarGroupProps } from './props';
import { applyGroupStyle } from './styles';
import { ITEM_PADDING } from './constants';


/**
 * A React component that represents a group of avatar items.
 * This component extends `React.PureComponent` and uses `ThemeContext` for theming.
 *
 * @component
 * @extends React.PureComponent<AvatarGroupProps, {}>
 * @example
 * ```typescript jsx
 * <AvatarGroup sortIndex="desc" itemBorderWidth="medium" itemBorderColor="primary" itemPadding={8}>
 *   <Avatar type="image" source={{ uri: 'https://example.com/image1.jpg' }} />
 *   <Avatar type="icon" icon="user" />
 *   <Avatar type="text" text="RA" />
 * </AvatarGroup>
 * ```
 *
 * @property {AvatarGroupProps} props - The properties passed to the AvatarGroup component.
 *
 * @property {('asc' | 'desc')} [props.sortIndex='asc'] - The sorting order of the avatar items. 'asc' for ascending (default), 'desc' for descending. This affects the z-index of the avatars, allowing them to overlap in a specific order.
 * @property {string} [props.itemBorderWidth='thick'] - The border width of each avatar item. It can be a predefined value from the theme's border widths (e.g., 'thin', 'medium', 'thick') or a custom string value. Defaults to 'thick'.
 * @property {React.ReactNode} props.children - The `Avatar` components to be displayed in the group. Only `Avatar` components are allowed as children.
 * @property {object} [props.style] - Additional styles to be applied to the container `View` of the group.
 * @property {number} [props.itemPadding=13] - The padding around each avatar item, in pixels. Default is 13.
 * @property {string} [props.itemBorderColor] - The border color for each avatar item. It can be a color name from the theme (e.g., 'primary', 'secondary') or a custom color string (e.g., '#FF0000'). If not provided, it defaults to the 'card' color from the theme.
 * @property {object} [props.restProps] - Additional props to be passed to the container `View`.
 *
 * @throws {Error} Throws an error if a child is not a valid `Avatar` component.
 *
 * @context {ThemeContext} - The theme context used for theming. Provides access to theme colors and border widths.
 *
 * @method render() - Renders the AvatarGroup component.
 *
 * @static @property {object} defaultProps - Default values for the component's props.
 * @static @property {('asc' | 'desc')} defaultProps.sortIndex - Default sorting order is 'asc'.
 * @static @property {string} defaultProps.itemBorderWidth - Default border width is 'thick'.
 * @static @property {React.Context<any>} contextType - Specifies the context type for the component, allowing it to subscribe to the nearest `ThemeContext` provider.
 * @static @property {React.ContextType<typeof ThemeContext>} context - Declares a context variable of the type inferred from the `ThemeContext`.
 */
export default class extends React.PureComponent<AvatarGroupProps, {}> {
  static defaultProps = {
    sortIndex: 'asc',
    itemBorderWidth: 'thick'
  };

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  private getStyles = () => {
    const theme = this.context.state;
    const { itemPadding, itemBorderColor, itemBorderWidth } = this.props;

    return applyGroupStyle({
      itemPadding: itemPadding || ITEM_PADDING,
      itemBorderWidth: theme.borders.width![itemBorderWidth!] ?? itemBorderWidth,
      itemBorderColor: (theme.colors[itemBorderColor!] ?? itemBorderColor) ?? theme.colors.card
    });
  };

  private renderChildren = (styles: ReturnType<typeof applyGroupStyle>) => {
    const { children, sortIndex } = this.props;
    return React.Children.map(children, (child, index) => {
      if (!(React.isValidElement(child) && child.type === Avatar)) {
        throw new Error(`child ${child} "it is not a valid Avatar item`);
      }
      return (
        <View key={index} style={[styles.item, { zIndex: getIndex(index, sortIndex) }]}>
          {child}
        </View>
      );
    });
  };

  public render() {
    const { style, ...restProps } = this.props;
    const styles = React.useMemo(this.getStyles, [
      this.props.itemPadding,
      this.props.itemBorderColor,
      this.props.itemBorderWidth,
      this.context.state.borders.width,
      this.context.state.colors
    ]);

    return (
      <View style={[styles.container, style]} {...restProps}>
        {this.renderChildren(styles)}
      </View>
    );
  }
}

/**
 * Calculates the z-index for an avatar item based on its index and the sorting order.
 *
 * @param {number} index - The index of the avatar item in the group.
 * @param {('asc' | 'desc')} sortIndex - The sorting order ('asc' for ascending, 'desc' for descending).
 * @returns {number} The calculated z-index.
 */
function getIndex(index: number, sortIndex: 'asc' | 'desc'): number {
  if(sortIndex === 'asc')
    return index;
  else
    return -1 * index;
}