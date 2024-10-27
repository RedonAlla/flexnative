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


export default React.memo((props: IconProps)=> {
  const appTheme = useThemeContext();
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
    { color: color || 'default', size: size || 'normal' },
    appTheme.colors,
  );
  
  return <Animated.Text style={[styles.icon, style, animatedStyles]} {...otherProps}>{icons[name]}</Animated.Text>;
});