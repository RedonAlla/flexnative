/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-26 00:35:01
 * @ Modified by: Redon Alla
 * @ Modified time: 2026-04-21 23:27:29
 * @ Description: A versatile Badge component for displaying text labels or indicators..
 */

import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

import { BaseColors, Fonts, useThemeState } from "@flexnative/theme-context";
import BadgeProps, { BadgePosition, Position } from "./props";
import { getTextColor, isString } from "./utilities";
import { POSITION } from "./constants";

const Badge: React.FC<BadgeProps> = ({
  text,
  style,
  children,
  borderColor,
  textColor,
  radius = 'full',
  size = 'md',
  color = 'error',
  borderWidth = 'none',
  position = 'top-right',
  ...resProps
})  => {
  const theme = useThemeState<BaseColors>();

  // Memoize derived style values that depend on theme and props
  const memoizedFontSize = useMemo(() => {
    return theme?.fontSize?.[size as keyof typeof theme.fontSize] ?? (typeof size === 'number' ? size : 12);
  }, [theme.fontSize, size]);

  const memoizedBorderRadius = useMemo(() => {
    return theme?.borders?.radius?.[radius as keyof typeof theme.borders.radius] ?? (typeof radius === 'number' ? radius : 0);
  }, [theme.borders?.radius, radius]);

  const memoizedBorderWidthValue = useMemo(() => {
    return theme?.borders?.width?.[borderWidth as keyof typeof theme.borders.width] ?? (typeof borderWidth === 'number' ? borderWidth : 0);
  }, [theme.borders?.width, borderWidth]);

  const badgeBackgroundColor = useMemo(() => {
    return theme?.colors?.[color as keyof BaseColors] ?? color;
  }, [theme.colors, color]);

  const badgeTextColor = useMemo(() => {
    return textColor || getTextColor(theme?.isDark, color, theme?.colors?.black);
  }, [textColor, theme.isDark, color, theme.colors]);

  // Memoize the entire badge style object
  const memoizedBadgeStyle = useMemo(() => {
    return [
      styles.badge,
      {
        borderColor,
        backgroundColor: badgeBackgroundColor,
        borderRadius: memoizedBorderRadius,
        borderWidth: memoizedBorderWidthValue,
        ...(isString(position) ? POSITION[position as BadgePosition] : position as Position),
      },
      style
    ];
  }, [borderColor, badgeBackgroundColor, memoizedBorderRadius, memoizedBorderWidthValue, position, style]);

  // Memoize the text style object
  const memoizedTextStyle = useMemo(() => ({
    padding: memoizedFontSize / 3,
    fontSize: memoizedFontSize,
    color: badgeTextColor,
    fontFamily: Fonts.sans,
  }), [memoizedFontSize, badgeTextColor]);

  return (
    <View style={styles.container}>
      {children}
        <Text
          style={[
            memoizedTextStyle,
            memoizedBadgeStyle
          ]}
          {...resProps}
        >
          {text}
        </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  badge: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
  }
});

export default Badge;