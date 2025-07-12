/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-05 00:24:04
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-11 19:03:47
 * @ Description: This file defines a functional component `VerticalSeparator` in a React Native application.
 *                This component renders a simple vertical line, often used to visually separate elements within a layout.
 */


import React from 'react';
import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

/**
 * This component renders a simple vertical line, often used to visually separate elements within a layout.
 * 
 * @param param `style`: `StyleProp<ViewStyle>` - Optional style object to customize the appearance of the separator.  This can be used to change the color, height, and other styling properties.
 * @returns This component renders a simple vertical line, often used to visually separate elements within a layout.
 */
const VerticalSeparator = ({ style }: { style: StyleProp<ViewStyle> }) => {
  return <View style={[ styles.separator, style ]} />;
};

export default VerticalSeparator;

const styles = StyleSheet.create({
  separator: {
    width: 1,
    height: '100%',
  },
});