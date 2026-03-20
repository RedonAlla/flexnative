import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  withDelay,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';

import { IconProps } from "./types";
import { styles } from './styles';
import { useIconCommon } from './useIconCommon';

const ANIMATION_DURATION = 1000;

function PulseIcon(props: IconProps & { duration?: number; delay?: number }) {
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
  const progress = useSharedValue(1);

  // Fallback to transparent to ensure the worklet has a valid string to interpolate
  const resolvedBackgroundColor = common?.style?.backgroundColor ?? 'transparent';

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ['transparent', resolvedBackgroundColor as string]
      ),
    };
  }, [progress, resolvedBackgroundColor]);

  React.useEffect(() => {
    progress.value = withDelay(
      delay,
      withRepeat(
        withTiming(0.4, {
          duration: duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1, // Infinite
        true // Reverse (fade out then in)
      )
    );
    return () => cancelAnimation(progress);
  }, [progress, duration, delay]);

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

export default React.memo(PulseIcon);
