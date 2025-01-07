/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 22:06:38
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-06 22:38:30
 * @ Description: This code defines a `Block` component in TypeScript using React and React Native. The `Block` component extends `React.PureComponent`, which optimizes the component by preventing unnecessary re-renders when the props haven't changed.
 */

import React from "react";
import { BlockProps } from "./block.props";
import { StyleProp, View, ViewStyle } from "react-native";


/**
 * A `Block` component in TypeScript using React and React Native.
 * 
 * This component extends `React.PureComponent`, which optimizes the component by preventing unnecessary re-renders when the props haven't changed.
 * 
 * @component
 * @example
 * ```tsx
 * <Block flex={1} row justify="center" align="center" backgroundColor="blue">
 *   <Text>Example Block</Text>
 * </Block>
 * ```
 * 
 * @extends {React.PureComponent<BlockProps>}
 * 
 * @prop {number} [flex] - Defines how a flex item will grow relative to the rest of the flex items inside the same container.
 * @prop {boolean} [row] - If true, sets the flex direction to row.
 * @prop {string} [justify] - Defines the alignment along the main axis.
 * @prop {string} [justifyContent] - Defines the alignment along the main axis.
 * @prop {string} [align] - Defines the default behavior for how flex items are laid out along the cross axis on the current line.
 * @prop {string} [alignItems] - Defines the default behavior for how flex items are laid out along the cross axis on the current line.
 * @prop {string} [content] - Defines the alignment of the flex container's lines within when there is extra space in the cross-axis.
 * @prop {string} [alignContent] - Defines the alignment of the flex container's lines within when there is extra space in the cross-axis.
 * @prop {string} [wrap] - Defines whether the flex container is single-line or multi-line.
 * @prop {number|string} [width] - Sets the width of the block.
 * @prop {number|string} [height] - Sets the height of the block.
 * @prop {string} [backgroundColor] - Sets the background color of the block.
 * @prop {number} [gap] - Sets the gap between items.
 * @prop {number} [rowGap] - Sets the gap between rows.
 * @prop {number} [columnGap] - Sets the gap between columns.
 * @prop {number|string} [padding] - Sets the padding inside the block.
 * @prop {StyleProp<ViewStyle>} [style] - Additional styles to apply to the block.
 * @prop {React.ReactNode} [children] - The content to be displayed inside the block.
 */
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
      padding,
      style,
      children,
      ...rest
    } = this.props;
    
    const blockStyle: StyleProp<ViewStyle>  = [
      flex == undefined ? { flex: 1 } : { flex },
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
      padding !== undefined && { padding },
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