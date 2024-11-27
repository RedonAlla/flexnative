/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-26 15:52:11
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-27 17:34:48
 * @ Description: Bottom Sheet overlay (background).
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { BlurView, BlurTint } from 'expo-blur';


/**
 * The intensity of the blur effect applied to the overlay.
 * 
 * @constant {number}
 */
const BLUR_INTENSITY = 15;

/**
 * Props for the Overlay component.
 * 
 * @typedef {Object} Props
 * @property {BlurTint} maskMode - The mode of the mask, which determines the blur tint.
 * @property {Function} [onPress] - Optional callback function to handle press events.
 */
type Props = {
  maskMode: BlurTint;
  onPress?: () => void;
}

/**
 * `Background` is a memoized React functional component that renders a pressable
 * area with a blur effect. It uses `Pressable` to handle press events and `BlurView`
 * to apply a blur effect to the background.
 *
 * @param {Props} props - The properties passed to the component.
 * @param {() => void} props.onPress - The function to call when the pressable area is pressed.
 * @param {string} props.maskMode - The tint mode for the blur effect.
 *
 * @returns {JSX.Element} The rendered component.
 */
export const Background = React.memo((props: Props) => (
  <Pressable style={styles.action} onPress={props.onPress} >
    <BlurView
      intensity={BLUR_INTENSITY}
      tint={props.maskMode}
      blurReductionFactor={8}
      experimentalBlurMethod='dimezisBlurView'
      style={styles.blurView}
    />
  </Pressable>
));

/**
 * Styles for the overlay component.
 * 
 * @property {object} action - Style for the action element.
 * @property {number} action.flex - Flex value for the action element.
 * @property {number} action.marginBottom - Margin bottom value for the action element.
 * @property {string} action.backgroundColor - Background color for the action element.
 * 
 * @property {object} blurView - Style for the blur view element.
 * @property {object} blurView.absoluteFillObject - Absolute fill object for the blur view element.
 * @property {string} blurView.backgroundColor - Background color for the blur view element.
 */
const styles = StyleSheet.create({
  action: {
    flex: 1,
    marginBottom: -15,
    backgroundColor: 'transparent',
  },
  blurView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent'
  }
});