/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-07 19:32:47
 * @ Description: Avatar Group component used to represent a list ov Avatar components.
 */

import React from 'react';
import { View } from 'react-native';

import ThemeContext from '@flexnative/theme-context';

import Avatar from './avatar';
import { AvatarGroupProps, AvatarProps } from './props';
import { applyGroupStyle } from './styles';
import { ITEM_PADDING } from './constants';


/**
 * A React component that represents a group of avatar items.
 * This component extends `React.PureComponent` and uses `ThemeContext` for theming.
 * 
 * @component
 * @example
 * <AvatarGroup>
 *   <Avatar />
 *   <Avatar />
 * </AvatarGroup>
 * 
 * @extends {React.PureComponent<AvatarGroupProps, {}>}
 * 
 * @prop {string} [sortIndex='asc'] - The sorting order of the avatar items. Default is 'asc'.
 * @prop {string} [itemBorderWidth='thick'] - The border width of each avatar item. Default is 'thick'.
 * @prop {React.ReactNode} children - The avatar items to be displayed in the group.
 * @prop {object} style - Additional styles for the container.
 * @prop {number} [itemPadding=13] - The padding for each avatar item. Default is 13.
 * @prop {string} itemBorderColor - The border color for each avatar item. Defaults to the card color from the theme context.
 * 
 * @throws Will throw an error if a child is not a valid Avatar item.
 * 
 * @context {ThemeContext} context - The theme context used for theming.
 */
export default class extends React.PureComponent<AvatarGroupProps, {}> {
  static defaultProps = {
    sortIndex: 'asc',
    itemBorderWidth: 'thick'
  }

  constructor(props: AvatarGroupProps) {
    super(props);
  }

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  public render() {
    const { children, style, sortIndex, itemPadding, itemBorderColor, itemBorderWidth, ...restProps } = this.props;

    const styles = applyGroupStyle({
      itemPadding: itemPadding || ITEM_PADDING,
      itemBorderWidth: itemBorderWidth,
      itemBorderColor: itemBorderColor || this.context.colors.card,
      theme: {
        colors: this.context.colors
      }
    });

    return (
      <View style={[styles.container, style]} {...restProps}>
        {React.Children.map(children, (child, index) => {
          
          if ((child as React.ReactElement<AvatarProps>).type !== Avatar)
            throw new Error(`child ${(child as React.ReactElement<AvatarProps>).type} "it is not a valid Avatar item`);

          return (
            <View style={[styles.item, { zIndex: getIndex(index, sortIndex)}]}>
              { child }
            </View>
          )
        })}
      </View>
    );
  }
}

function getIndex(index: number, sortIndex: 'asc' | 'desc'): number {
  if(sortIndex === 'asc')
    return index;
  else
    return -1 * index;
}