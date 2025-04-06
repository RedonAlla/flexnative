/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-08 12:58:28
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-04-06 18:11:56
 * @ Description: Provides components for creating skeleton loading animations.
 */

import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Svg, { ClipPath, Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { useThemeState } from '@flexnative/theme-context';

import { IContentLoaderProps } from './props';
import { BACKGROUND_COLOR } from './constants';
import { animationDelay, animationDuration, getColor, uid } from './utilities';


/**
 * An animated version of the LinearGradient component.

 * AnimatedLinearGradient is a component that combines the functionality of
 * `Animated` and `LinearGradient` to create an animated gradient effect.
 * @type {Animated.AnimatedComponent<typeof LinearGradient>}
 */
const AnimatedLinearGradient: Animated.AnimatedComponent<typeof LinearGradient> =
  Animated.createAnimatedComponent(LinearGradient);

/**
 * SvgContainer is a functional React component that renders an SVG with an animated gradient.
 * It uses the Animated API to create a smooth transition effect for the gradient.
 *
 * @param {IContentLoaderProps} props - The properties passed to the component.
 * @param {React.ReactNode} [props.children] - The child elements to be used as a mask.
 * @param {ColorValue} [props.backgroundColor] - The background color of the skeleton.
 * @param {ColorValue} [props.foregroundColor] - The foreground color of the skeleton.
 * @param {React.ReactNode} [props.beforeMask] - Optional element to render before the mask.
 * @param {string} [props.uniqueKey] - A unique key for the component.
 * @param {boolean} [props.animate=true] - Whether to animate the gradient.
 * @param {number} [props.speed=1.2] - The speed of the animation.
 * @param {number} [props.interval=0.25] - The interval between animations.
 * @returns {JSX.Element} The rendered SVG element with animated gradient.
 * @example
 * <SkeletonLoader
 *   backgroundColor="lightgray"
 *   foregroundColor="gray"
 *   speed={1}
 *   interval={0.3}
 * >
 *   <Rect x="0" y="0" width="100" height="20" />
 * </SkeletonLoader>
 */
const SvgContainer: React.FC<IContentLoaderProps> = ({
  children,
  backgroundColor,
  foregroundColor,
  beforeMask,
  uniqueKey,
  animate = true,
  speed = 1.2,
  interval = 0.25,
  ...props
}) => {
  const theme = useThemeState();
  const animatedValue = useRef(new Animated.Value(-1)).current;
  const fixedId = useRef(uniqueKey || uid()).current;
  const idClip = `${fixedId}-diff`;
  const idGradient = `${fixedId}-animated-diff`;

  const startAnimation = () => {
    const durationMs = animationDuration(speed);
    const delay = animationDelay(durationMs, interval);

    Animated.timing(animatedValue, {
      toValue: 2,
      delay,
      duration: durationMs,
      useNativeDriver: true,
    }).start(() => {
      if (animate) {
        animatedValue.setValue(-1);
        startAnimation();
      }
    });
  };

  useEffect(() => {
    if (animate) {
      startAnimation();
    }
    return () => {
      animatedValue.stopAnimation();
    };
  }, [animate, speed, interval]);

  const x1Animation = animatedValue.interpolate({
    inputRange: [-1, 2],
    outputRange: ['-100%', '100%'],
    extrapolate: 'clamp',
  });

  const x2Animation = animatedValue.interpolate({
    inputRange: [-1, 2],
    outputRange: ['0%', '200%'],
    extrapolate: 'clamp',
  });

  return (
    <Svg {...props}>
      {beforeMask && React.isValidElement(beforeMask) ? beforeMask : null}

      <Rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${idClip})`}
        clipPath={`url(#${idGradient})`}
      />

      <Defs>
        <ClipPath id={idGradient}>{children}</ClipPath>

        <AnimatedLinearGradient id={idClip} x1={x1Animation} x2={x2Animation} y1="0" y2="0">
          <Stop
            offset="0"
            stopColor={getColor(BACKGROUND_COLOR[theme.scheme!], backgroundColor)}
          />
          <Stop offset="0.5" stopColor={getColor(theme.colors.card, foregroundColor)} />
          <Stop
            offset="1"
            stopColor={getColor(BACKGROUND_COLOR[theme.scheme!], backgroundColor)}
          />
        </AnimatedLinearGradient>
      </Defs>
    </Svg>
  );
};

export default SvgContainer;