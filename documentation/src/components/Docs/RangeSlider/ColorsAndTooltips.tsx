import React from 'react';
import { RangeSlider } from '@flexnative/slider';

export default () => (
  <div className='example-block' style={{display: 'block'}}>
    {/* Custom track and thumb colors */}
    <RangeSlider 
      minimumTrackTintColor="#4A90E2" 
      maximumTrackTintColor="#50E3C2"
      thumbTintColor="#F5A623" 
    />

    {/* Custom tooltip appearance */}
    <RangeSlider 
      tooltipBackgroundColor="#FF6B6B" 
      tooltipBorderColor="red" 
      tooltipBorderWidth={1}
    />
  </div>
);
