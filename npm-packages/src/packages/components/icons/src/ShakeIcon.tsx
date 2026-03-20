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

const ANIMATION_DURATION = 120;
const ROTATION_DEG = 15;

function ShakeIcon(props: IconProps & { duration?: number; delay?: number }) {
  const {
    name,
    size,
    color,
    borderRadius,
    backgroundColor,
    style,
    duration = ANIMATION_DURATION,
    delay = 0,
    ...rest
  } = props;

  const common = useIconCommon(props);
  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  }, [rotation]);

  React.useEffect(() => {
    // Start by rotating to the left, then oscillate between left and right
    rotation.value = withDelay(
      delay,
      withSequence(
        withTiming(-ROTATION_DEG, { duration: duration / 2, easing: Easing.linear }),
        withRepeat(
          withTiming(ROTATION_DEG, { duration: duration, easing: Easing.linear }),
          -1, // Infinite
          true // Reverse
        )
      )
    );
    return () => cancelAnimation(rotation);
  }, [rotation, duration, delay]);

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

export default React.memo(ShakeIcon);
