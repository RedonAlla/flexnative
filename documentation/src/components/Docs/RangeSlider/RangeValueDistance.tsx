import React from 'react';
import { RangeSlider } from '@flexnative/slider';

export default () => (
  <div className='example-block' style={{display: 'block'}}>
    {/* Default 0 to 1 range with specific starting points */}
    <RangeSlider value={[0.2, 0.8]} />

    {/* Custom bounds (0-100) */}
    <RangeSlider 
      minimumValue={0} 
      maximumValue={100} 
      value={[20, 50]} 
    />

    {/* Enforce a minimum distance of 20 units between thumbs */}
    <RangeSlider 
      minimumValue={0} 
      maximumValue={100} 
      minimumDistance={20} 
      value={[30, 40]} // Will snap to maintain the 20 unit gap
    />
  </div>
);
