/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-10 00:10:38
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-21 22:23:59
 * @ Description: An animated ling providing navigation functionality, with zoom in effect on press.
 */

import React, { useState } from 'react';
import { StyleSheet, Animated, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';

/**
 * An animated ling providing navigation functionality, with zoom in effect on press.
 * 
 * @param {LinkProps} props 
 * @returns 
 */
export default function ZoomableLink(props: LinkProps) {
  const { children, ...restProps } = props;
  
  // State using hooks
  const [zoomAnim] = useState(new Animated.Value(1));

  const animationValues = (toValue: number) => ({
    toValue,
    duration: 150,
    useNativeDriver: false,
  });

  // Handlers for press interactions
  const onPressIn = (): void =>
    Animated.timing(zoomAnim, animationValues(1.1)).start();

  const onPressOut = (): void =>
    Animated.timing(zoomAnim, animationValues(1)).start();

  return (
    <Link {...restProps} asChild>
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut} style={styles.container}>
        <Animated.View style={[styles.animatedView, { transform: [{ scale: zoomAnim }] }]}>
          {children}
        </Animated.View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    pointerEvents: 'auto',
    backgroundColor: 'transparent',
  },
  animatedView: {
    height: '100%',
    position: 'relative',
    marginHorizontal: 16,
    backgroundColor: 'transparent',
  },
});
