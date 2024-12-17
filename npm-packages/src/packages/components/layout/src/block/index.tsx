/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 22:06:38
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-17 19:37:21
 * @ Description: This code defines a `Block` component in TypeScript using React and React Native. The `Block` component extends `React.PureComponent`, which optimizes the component by preventing unnecessary re-renders when the props haven't changed.
 */

import React from "react";
import { BlockProps } from "./block.props";
import { StyleProp, View, ViewStyle } from "react-native";


export default class Block extends React.PureComponent<BlockProps> {
  render(): React.ReactNode {
    const {
      flex,
      row,
      justify,
      justifyContent,
      align,
      alignItems,
      content,
      alignContent,
      wrap,
      width,
      height,
      backgroundColor,
      gap,
      rowGap,
      columnGap,
      style,
      children,
      ...rest
    } = this.props;
    
    const blockStyle: StyleProp<ViewStyle>  = [
      flex !== undefined && { flex },
      row && { flexDirection: "row" },
      gap !== undefined && { gap: gap } ,
      rowGap !== undefined && { rowGap: rowGap } ,
      columnGap !== undefined && { columnGap: columnGap } ,
      Boolean(row && gap) && { rowGap: gap },
      Boolean(!row && gap) && { columnGap: gap },
      justify !== undefined && { justifyContent: justify },
      justifyContent !== undefined && { justifyContent },
      align !== undefined && { alignItems: align },
      alignItems !== undefined && { alignItems },
      content !== undefined && { alignContent: content },
      alignContent !== undefined && { alignContent },
      wrap !== undefined && { flexWrap: wrap },
      width !== undefined && { width },
      height !== undefined && { height },
      { backgroundColor: backgroundColor || 'transparent' },
      style
    ];

    return (
      <View style={blockStyle} {...rest}>
        {children}
      </View>
    );
  }
}