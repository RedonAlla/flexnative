/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 21:53:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-16 22:56:29
 * @ Description: Define an interface BlockProps which extends properties from ViewProps.
 */

import { ColorValue, ViewProps, ViewStyle } from "react-native";


/**
 *  Define an interface BlockProps which extends properties from ViewProps.
 */
export interface BlockProps extends ViewProps {
  /**
   * Optional property to set flex-grow, flex-shrink, and flex-basis for a component.
   */
  flex?: ViewStyle["flex"];

  /**
   * Optional property to define justification of content along the main axis.
   */
  justify?: ViewStyle["justifyContent"];

  /**
   * Alternative optional property name for justify content along the main axis.
   */
  justifyContent?: ViewStyle["justifyContent"];

  /**
   * Optional property to set alignment of items along the cross-axis.
   */
  align?: ViewStyle["alignItems"];

  /**
   * Alternative optional property name for aligning items along the cross-axis.
   */
  alignItems?: ViewStyle["alignItems"];

  /**
   * Optional property to define alignment of content when there is extra space in the cross-axis.
   */
  content?: ViewStyle["alignContent"];

  /**
   * Alternative optional property name for alignment of content along the cross-axis.
   */
  alignContent?: ViewStyle["alignContent"];

  /**
   * Optional property to specify the width of the component.
   */
  width?: ViewStyle["width"];

  /**
   * Optional property to specify the height of the component.
   */
  height?: ViewStyle["height"];

  /**
   * Optional property to control if children should wrap onto multiple lines.
   */
  wrap?: ViewStyle["flexWrap"];

  /**
   * Optional property to specify the gap between rows or column in grid layout.
   */
  gap?: ViewStyle["rowGap" | "gap"];

  /**
   * Optional boolean property to determine if the layout should be in a row format.
   * If set to true, it likely indicates that the component's children should be displayed horizontally.
   */
  row?: boolean;
  
  /**
   * Optional property 'backgroundColor' of type 'ColorValue'.
   */
  backgroundColor?: ColorValue;

  /**
   * Optional ReactNode representing the child nodes or elements within the component.
   */
  children?: React.ReactNode;
}