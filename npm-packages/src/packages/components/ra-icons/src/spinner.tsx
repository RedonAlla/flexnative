/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-27 14:25:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-03-16 22:35:31
 * @ Description: Spinner component used to display a spinning icon.
 */

import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';

import { useThemeContext } from '@flexnative/theme-context';

import { IconProps, icons } from './props';
import createStyles from './styles';



/**
 * The duration of the spinner animation in milliseconds.
 * @constant
 * @type {number}
 */
const ANIMATION_DURATION: number = 700;


/**
 * A memoized React component that renders a spinning icon using animated styles.
 * 
 * @param {IconProps} props - The properties for the icon component.
 * @returns {JSX.Element} The animated spinning icon component.
 * 
 * @component
 * @example
 * return (
 *   <Spinner name="loading" size="large" color="primary" />
 * )
 * 
 * @remarks
 * This component uses the `useThemeContext` hook to access theme values and the `useSharedValue` and `useAnimatedStyle` hooks from Reanimated for animation.
 * 
 * @param {IconProps} props - The properties for the icon component.
 * @param {string} props.name - The name of the icon to be displayed.
 * @param {string} props.size - The size of the icon.
 * @param {string} props.color - The color of the icon.
 * @param {object} props.style - Additional styles for the icon.
 * @param {object} props.otherProps - Any other properties to be passed to the icon component.
 */
const Spinner = (props: IconProps) => {
  const theme = useThemeContext();
  const rotation = useSharedValue(0);
  
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation]);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      }),
      0
    );
    return () => cancelAnimation(rotation);
  }, [rotation]);

  const { name, size = 'md', color = 'text', style, ...otherProps } = props;

  const styleProps = {
    color: (theme.state.colors[color as keyof typeof theme.state.colors] ?? color) || theme.state.colors.text,
    size: (theme.state.fontSize[size] ?? size) || theme.state.fontSize.md
  };

  const styles = createStyles(styleProps);
  
  return (
    <Animated.Text
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[styles.icon, style, animatedStyles]}
      {...otherProps}
    >
      {icons[name]}
    </Animated.Text>
  );
};

export default React.memo(Spinner);