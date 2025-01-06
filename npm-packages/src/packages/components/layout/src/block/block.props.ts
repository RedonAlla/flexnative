/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 21:53:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-06 20:11:20
 * @ Description: Define an interface BlockProps which extends properties from ViewProps.
 */

import { ColorValue, ViewProps, ViewStyle } from "react-native";


/**
 *  Define an interface BlockProps which extends properties from ViewProps.
 */
/**
 * Properties for the Block component.
 */
export interface BlockProps extends ViewProps {
  /**
   * Optional property to set flex style for block component.
   * 
   * @default 1
   */
  flex?: ViewStyle["flex"];

  /**
   * A short version for `justifyContent` style property.
   * Same as `justifyContent` property.
   */
  justify?: ViewStyle["justifyContent"];

  /**
   * Alternative optional property name for justify content along the main axis.
   */
  justifyContent?: ViewStyle["justifyContent"];

  /**
   * A short version for `justifyContent` style property.
   * Same as `justifyContent` property.
   */
  align?: ViewStyle["alignItems"];

  /**
   * Optional property to set alignment of items along the cross-axis.
   */
  alignItems?: ViewStyle["alignItems"];

  /**
   * A short version for `alignContent` style property.
   * Same as `alignContent` property.
  */
  content?: ViewStyle["alignContent"];

  /**
   * Defines the distribution of lines along the cross-axis.
   * This only has effect when items are wrapped to multiple lines using `flexWrap`.
   * 
   * One of `flex-start`, `flex-end`, `center`, `stretch`, `baseline`
   */
  alignContent?: ViewStyle["alignContent"];

  /**
   * Optional property to specify the width of the `Block` component.
   */
  width?: ViewStyle["width"];

  /**
   * Optional property to specify the height of the `Block` component.
   */
  height?: ViewStyle["height"];

  /**
   * Optional property to control if children should wrap onto multiple lines.
   */
  wrap?: ViewStyle["flexWrap"];

  /**
   * Optional property to specify the gap between rows or column in grid layout.
   */
  gap?: ViewStyle["gap"];

  /**
   * Optional boolean property to determine if the layout should be in a row format.
   * If set to `true`, it likely indicates that the component's children should be displayed horizontally.
   */
  row?: boolean;

  /**
   * Optional property to specify the gap between rows in grid layout.
   */
  rowGap?: ViewStyle["rowGap"];

  /**
   * Optional property `columnGap` which takes a value from ViewStyle's `columnGap` type definition.
   */
  columnGap?: ViewStyle["columnGap"];

  /**
   * Optional property for padding top, bottom, left, right.
   */
  padding?: ViewStyle["padding"];
  
  /**
   * Optional property 'backgroundColor' of type 'ColorValue'.
   */
  backgroundColor?: ColorValue;

  /**
   * Optional ReactNode representing the child nodes or elements within the component.
   */
  children?: React.ReactNode;
}