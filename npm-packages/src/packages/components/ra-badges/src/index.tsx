/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-26 00:35:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-07-12 16:58:21
 * @ Description: A versatile Badge component for displaying text labels or indicators..
 */

import React from "react";
import { Text, View } from "react-native";

import { BaseColors, useThemeState } from "@flexnative/theme-context";

import BadgedProps from "./props";
import badgeStyle from './styles';


/**
 * @function Badge
 * @description A React component that renders a badge with customizable text, style, and appearance.
 * @param {BadgeProps} props - The properties for the Badge component.
 * @returns {JSX.Element} A React element representing the Badge.
 * @example
 *
 * // With custom styles
 * <Badge text="Important" style={{ fontWeight: 'bold', color: 'white' }} />
 *
 * // With children
 * <Badge text="3">
 *   <Icon name="bell" />
 * </Badge>
 *
 * // With all props
 * <Badge
 *   text="Sale"
 *   radius="small"
 *   size="large"
 *   type="solid"
 *   color="primary"
 *   borderWidth="thin"
 *   position="bottom-left"
 *   style={{ fontSize: 16 }}
 * />
 */
const Badge: React.FC<BadgedProps> = ({
  text,
  style,
  children,
  radius = 'full',
  size = 'medium',
  type = 'solid',
  color = 'primary',
  borderWidth = 'none',
  position = 'top-right',
  ...resProps
})  => {
  const theme = useThemeState<BaseColors>();
  const styles = badgeStyle(theme, {
    text,
    style,
    children,
    radius,
    size,
    type,
    color,
    borderWidth,
    position,
    ...resProps,
  });

  return (
    <View style={styles.container}>
      {children}
      <Text
        style={[styles.text, style]}
        {...resProps}
      >
        {text}
      </Text>
    </View>
  );
};

export default Badge;