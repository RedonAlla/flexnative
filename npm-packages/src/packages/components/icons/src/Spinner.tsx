
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

const ANIMATION_DURATION: number = 700;

function Spinner(props: IconProps & { duration?: number; delay?: number }) {
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
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation]);

  React.useEffect(() => {
    rotation.value = withDelay(
      delay,
      withRepeat(
        withTiming(360, {
          duration: duration,
          easing: Easing.linear,
        }),
        0
      )
    );
    return () => cancelAnimation(rotation);
  }, [rotation, duration, delay]);

  if (!common) {
    return null;
  }

  return(
    <Animated.Text
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[
        styles.core,
        common.style,
        style,
        animatedStyles
      ]}
      {...rest}
    >
      {common.icon}
    </Animated.Text>
  );
}

export default React.memo(Spinner);