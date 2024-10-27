/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-06-07 23:29:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-19 23:44:35
 * @ Description: Avatar Group component used to represent a list ov Avatar components.
 */

import React from 'react';
import { View } from 'react-native';

import ThemeContext from '@flexnative/theme-context';

import Avatar from './avatar';
import { AvatarGroupProps, AvatarProps } from './props';
import { applyGroupStyle } from './styles';


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
      itemPadding: itemPadding || 13,
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