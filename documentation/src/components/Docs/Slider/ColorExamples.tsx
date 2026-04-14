import React from 'react';

import { Slider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';

export default class ColorExamples extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
        {/* Custom track colors */}
        <Slider 
          minimumTrackTintColor="#FF5733" 
          maximumTrackTintColor="#D1D1D1" 
        />

        {/* Custom thumb color */}
        <Slider thumbTintColor="royalblue" />

        {/* Full color customization */}
        <Slider 
          minimumTrackTintColor="green" 
          maximumTrackTintColor="lightgray" 
          thumbTintColor="darkgreen" 
        />
      </DemoBlock>
    );
  }
}
