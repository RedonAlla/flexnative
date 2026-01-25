/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 23:09:33
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-03 22:55:13
 * @ Description: This code defines a robust card component suitable for a themed application using React Native and TypeScript, leveraging custom hooks for theme handling and well-defined styling.
 */

import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

import { useThemeContext } from '@flexnative/theme-context';


/**
 * Props for the Card component.
 */
type CardProps = {
  /**
   * A string prop representing the title of the card.
   */
  title: string;

  /**
   * A prop that can be a single or an array of React nodes representing child elements within the card.
   */
  children: React.ReactNode | React.ReactNode[];

  /**
   * Optional style prop to apply custom styles to the card.
   */
  style?: StyleProp<ViewStyle> | undefined;
}

/**
 * Declare a functional component named 'DemoBlock' using React.FC with CardProps
 * @param {CardProps} param
 * @returns functional component
 */
const DemoBlock: React.FC<CardProps> = ({ title, children, style }) => {
  const theme = useThemeContext();

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.colors.card }, style]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>{title}</Text>
      {children}
    </View>
  );
};

/**
 * Export the DemoBlock component as the default export of the module
 */
export default DemoBlock;


/**
 * Define a StyleSheet for styling the DemoBlock component
 */
const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%'
  },
  title: {
    fontWeight: '700',
    fontFamily: 'Bold',
    paddingBottom: 13
  }
});