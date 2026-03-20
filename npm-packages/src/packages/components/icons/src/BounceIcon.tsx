import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withDelay,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';

import { IconProps } from "./types";
import { styles } from './styles';
import { useIconCommon } from './useIconCommon';

const ANIMATION_DURATION = 1000;

function BounceIcon(props: IconProps & { duration?: number; delay?: number }) {
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
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, [scale]);

  React.useEffect(() => {
    scale.value = withDelay(
      delay,
      withRepeat(
        withTiming(1.2, {
          duration: duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1, // Infinite
        true // Reverse (scale up then down)
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

export default React.memo(BounceIcon);
