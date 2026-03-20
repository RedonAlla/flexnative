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

const ANIMATION_DURATION = 300;
const ROTATION_DEG = 10;

function WiggleIcon(props: IconProps & { duration?: number; delay?: number }) {
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
    // Start by rotating slightly to the left, then oscillate
    rotation.value = withDelay(
      delay,
      withSequence(
        withTiming(-ROTATION_DEG, { duration: duration / 2, easing: Easing.inOut(Easing.ease) }),
        withRepeat(
          withTiming(ROTATION_DEG, { duration: duration, easing: Easing.inOut(Easing.ease) }),
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

export default React.memo(WiggleIcon);
