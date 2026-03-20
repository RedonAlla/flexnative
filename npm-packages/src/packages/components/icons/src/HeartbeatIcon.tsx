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
  interpolateColor,
} from 'react-native-reanimated';

import { IconProps } from "./types";
import { styles } from './styles';
import { useIconCommon } from './useIconCommon';

const ANIMATION_DURATION = 1000;

function HeartbeatIcon(props: IconProps & { duration?: number; delay?: number; pulseColor?: string }) {
  const {
    name,
    size,
    color,
    borderRadius,
    backgroundColor,
    style,
    duration = ANIMATION_DURATION,
    delay = 0,
    pulseColor,
    ...rest
  } = props;

  const common = useIconCommon(props);
  const scale = useSharedValue(1);
  const baseColor = common?.style?.color ?? 'transparent';

  const animatedStyles = useAnimatedStyle(() => {
    const styles: any = {
      transform: [{ scale: scale.value }],
    };

    if (pulseColor) {
      styles.color = interpolateColor(
        scale.value,
        [1, 1.2],
        [baseColor as string, pulseColor]
      );
    }

    return styles;
  }, [scale, baseColor, pulseColor]);

  React.useEffect(() => {
    const beatTime = duration * 0.15; // Quick beat
    const restTime = duration * 0.55; // Pause between beats

    scale.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(1.2, { duration: beatTime, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: beatTime, easing: Easing.inOut(Easing.ease) }),
          withTiming(1.2, { duration: beatTime, easing: Easing.inOut(Easing.ease) }),
          withTiming(1, { duration: restTime, easing: Easing.inOut(Easing.ease) })
        ),
        -1, // Infinite loop
        false // Do not reverse (heartbeat is directional)
      )
    );
    return () => cancelAnimation(scale);
  }, [scale, duration, delay]);

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

export default React.memo(HeartbeatIcon);
