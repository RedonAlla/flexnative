import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';

import { IconProps } from "./types";
import { styles } from './styles';
import { useIconCommon } from './useIconCommon';

const ANIMATION_DURATION = 80;
const DEFAULT_AMPLITUDE = 4;

function GlitchIcon(props: IconProps & { duration?: number; delay?: number; amplitude?: number }) {
  const {
    name,
    size,
    color,
    borderRadius,
    backgroundColor,
    style,
    duration = ANIMATION_DURATION,
    delay = 0,
    amplitude = DEFAULT_AMPLITUDE,
    ...rest
  } = props;

  const common = useIconCommon(props);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ],
    };
  }, [translateX, translateY, opacity]);

  React.useEffect(() => {
    const timeConfig = { duration: duration, easing: Easing.linear };

    // X-axis glitch pattern
    translateX.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(amplitude, timeConfig),
          withTiming(-amplitude, timeConfig),
          withTiming(amplitude / 2, timeConfig),
          withTiming(-amplitude / 2, timeConfig),
          withTiming(0, timeConfig),
          withDelay(duration * 15, withTiming(0, { duration: 0 })) // Random pause simulation
        ),
        -1,
        false
      )
    );

    // Y-axis glitch pattern
    translateY.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(-amplitude / 3, timeConfig),
          withTiming(amplitude / 3, timeConfig),
          withTiming(-amplitude, timeConfig),
          withTiming(amplitude, timeConfig),
          withTiming(0, timeConfig),
          withDelay(duration * 15, withTiming(0, { duration: 0 }))
        ),
        -1,
        false
      )
    );

    // Opacity glitch pattern
    opacity.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(0.8, timeConfig),
          withTiming(1, timeConfig),
          withTiming(0.4, timeConfig),
          withTiming(1, timeConfig),
          withTiming(1, timeConfig),
          withDelay(duration * 15, withTiming(1, { duration: 0 }))
        ),
        -1,
        false
      )
    );

    return () => {
      cancelAnimation(translateX);
      cancelAnimation(translateY);
      cancelAnimation(opacity);
    };
  }, [translateX, translateY, opacity, duration, delay, amplitude]);

  if (!common) {
    return null;
  }

  return (
    <Animated.Text
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[styles.core, common.style, style, animatedStyles]}
      {...rest}
    >
      {common.icon}
    </Animated.Text>
  );
}

export default React.memo(GlitchIcon);
