/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: The `withFancyDrawer` function is a HOC that enhances a given component with additional animations and styles to simulate a fancy drawer effect.
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { getOptions } from './utilities';
import { CARD_BORDER_RADIUS, BACK_CARD_OPACITY } from './constants';


/**
 * The `withFancyDrawer` function is a HOC that enhances a given component with additional animations and styles to simulate a fancy drawer effect.
 * 
 * The code makes use of React hooks and animation libraries (useTheme, useDrawerProgress, useDrawerStatus, and useAnimatedStyle)
 * to dynamically apply animations based on the drawer's state and progress.
 * 
 * @param {React.ComponentType<React.PropsWithChildren<T>>} Component 
 * @returns {React.PropsWithChildren<T>}
 */
export function withFancyDrawer<T>(Component: React.ComponentType<React.PropsWithChildren<T>>) {
  /**
   * Define and return a wrapper component around the passed-in component.
   */
  return function Wrapper(componentProps: React.PropsWithChildren<T>) {

    const options = getOptions();
    const { colors } = useTheme();
    const animated = useDrawerProgress();
    const isOpen = useDrawerStatus() === 'open';

    // Create an animated style for the border radius of the card
    const borderRadiusStyle = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        animated.value,
        [0, 1],
        [1, CARD_BORDER_RADIUS],
        Extrapolation.CLAMP
      );

      return {
        borderRadius
      };
    });

    // Create an animated style for transforming the transition container during the drawer animation.
    const transitionContainerStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        animated.value,
        [0, 1],
        [1, 0.9],
        Extrapolation.CLAMP
      );

      const translateX = interpolate(
        animated.value,
        [0, 1],
        [0, 0],
        Extrapolation.CLAMP
      );
      
      return {
        transform: [
          { perspective: options?.width ?? 1000 },
          { rotateY: `${interpolate(animated.value, [0, 1], [0, -25], 'clamp')}deg` },
          { scale },
          { translateX }
        ]
      };
    });

    // Create an animated style for the back card transformation during the drawer animation
    const backCardStyle = useAnimatedStyle(() => {
      const translateX = interpolate(
        animated.value,
        [0, 0.5, 1],
        [0, 0.5, -80],
        Extrapolation.CLAMP
      );
      
      return {
        transform: [
          { scale: 0.95 },
          { translateX }
        ]
      };
    });

    return (
      <View style={{ flex: 1, backgroundColor: options?.drawerStyle?.backgroundColor }}>
        <StatusBar backgroundColor='transparent' style={isOpen ? 'light' : 'dark'} />
        <Animated.View style={[styles.transitionContainer, transitionContainerStyle]} >
          <Animated.View style={[
            styles.backCard,
            { backgroundColor: colors.background },
            backCardStyle
          ]} />
          <Animated.View style={[styles.card, borderRadiusStyle]}>
            <Component {...componentProps} />
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

/**
 * Stylesheet containing styles for the animated view components.
 */
const styles = StyleSheet.create({
  transitionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backCard: {
    width: '100%',
    height: '100%',
    opacity: BACK_CARD_OPACITY,
    borderRadius: CARD_BORDER_RADIUS
  },
  card: {
    top: 0,
    left: 0,
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute'
  }
});
