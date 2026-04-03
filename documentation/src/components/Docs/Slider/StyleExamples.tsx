import React from 'react';
import { StyleSheet } from 'react-native';
import { Slider } from '@flexnative/slider';
import { LOGO } from '@site/src/constants/common';

export default class StyleExamples extends React.PureComponent {
  render() {
    return (
      <div className='example-block' style={{display: 'block'}}>
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
      </div>
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
