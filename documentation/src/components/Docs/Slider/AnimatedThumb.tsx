import React, { useRef } from 'react';
import { Animated } from 'react-native';
import { Slider } from '@flexnative/slider';

export default () => {
  const scale = useRef(new Animated.Value(1)).current;

  const handleSlidingStart = () => {
    Animated.spring(scale, {
      toValue: 1.5,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const handleSlidingComplete = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Slider
      value={0.5}
      onSlidingStart={handleSlidingStart}
      onSlidingComplete={handleSlidingComplete}
      thumbStyle={{
        // The fix in Slider.tsx allows this scale to merge with translateX
        transform: [{ scale }]
      }}
      thumbTintColor="primary"
    />
  );
};
