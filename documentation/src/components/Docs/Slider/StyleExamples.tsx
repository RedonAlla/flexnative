import React from 'react';
import { StyleSheet } from 'react-native';

import { Slider } from '@flexnative/slider';
import { LOGO } from '@site/src/constants/common';
import DemoBlock from '../../common/DemoBlock';


export default class StyleExamples extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
        {/* Thick track with rounded corners */}
        <Slider 
          trackStyle={styles.thickTrack} 
        />

        {/* Large custom thumb */}
        <Slider 
          thumbStyle={styles.largeThumb} 
        />

        {/* Using a custom image as the thumb */}
        <Slider 
          thumbImage={LOGO} 
          thumbTintColor="gold"
        />
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  thickTrack: {
    height: 10,
    borderRadius: 5,
  },
  largeThumb: {
    width: 30,
    height: 30,
    borderRadius: 15,
  }
});
