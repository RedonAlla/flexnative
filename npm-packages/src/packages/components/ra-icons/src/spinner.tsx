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


const TO_VALUE_ANIMATION = 360;
const ANIMATION_DURATION = 700;


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
export default React.memo((props: IconProps)=> {
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
  }, [rotation.value]);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(TO_VALUE_ANIMATION, {
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      }),
      0
    );
    return () => cancelAnimation(rotation);
  }, []);

  const { name, size, color, style, ...otherProps } = props;

  const styles = createStyles(
    {
      color: (theme.colors[color!] ?? color) || theme.colors.text,
      size: (theme.fontSize[size!] ?? size) || theme.fontSize.default
    },
  );
  
  return <Animated.Text style={[styles.icon, style, animatedStyles]} {...otherProps}>{icons[name]}</Animated.Text>;
});