import React, { useEffect, useRef } from 'react';
import { Pressable, StyleSheet, Animated, Easing, ViewStyle } from 'react-native';
import { useThemeContext } from '@flexnative/theme-context';

// Define the props for our component
interface ToggleButtonProps {
  /** The value of the toggle button. If true, the toggle is on. */
  value: boolean;
  /** Callback that is called when the user toggles the button. */
  onValueChange: (newValue: boolean) => void;
  /** Optional custom style for the container. */
  style?: ViewStyle;
  /** If true, the user won't be able to interact with the toggle. */
  disabled?: boolean;
}

const THUMB_SIZE = 28;
const TRACK_WIDTH = 56;
const TRACK_HEIGHT = 32;
const PADDING = 2;
const THUMB_TRANSLATE_X = TRACK_WIDTH - THUMB_SIZE - PADDING * 2;

const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  onValueChange,
  style,
  disabled = false,
}) => {
  const { state: theme } = useThemeContext();
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false, // transform.translateX is not a native driver property
    }).start();
  }, [value, animatedValue]);

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  // Animate the thumb's position
  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, THUMB_TRANSLATE_X],
  });

  // Animate the track's background color
  const trackBackgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.border as string, theme.colors.primary as string],
  });

  const containerStyle = [
    styles.track,
    { backgroundColor: trackBackgroundColor, opacity: disabled ? 0.5 : 1 },
    style,
  ];

  const thumbStyle = [
    styles.thumb,
    { backgroundColor: theme.colors.card, transform: [{ translateX: thumbTranslateX }] },
  ];

  return (
    <Pressable onPress={handlePress} style={containerStyle} disabled={disabled}>
      <Animated.View style={thumbStyle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  track: { width: TRACK_WIDTH, height: TRACK_HEIGHT, borderRadius: TRACK_HEIGHT / 2, justifyContent: 'center', padding: PADDING },
  thumb: { width: THUMB_SIZE, height: THUMB_SIZE, borderRadius: THUMB_SIZE / 2, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2 },
});

export default ToggleButton;