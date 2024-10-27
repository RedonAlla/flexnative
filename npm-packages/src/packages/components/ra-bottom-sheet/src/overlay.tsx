/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-05-26 15:52:11
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-20 12:56:32
 * @ Description: Bottom Sheet overlay (background).
 */

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { BlurTint, BlurView } from 'expo-blur';


const BLUR_INTENSITY = 15;

type Props = {
  maskMode: BlurTint;
  onPress?: () => void;
}

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