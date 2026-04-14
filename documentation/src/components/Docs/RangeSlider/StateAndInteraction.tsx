import React from 'react';

import { RangeSlider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default () => (
  <DemoBlock>
    {/* Interaction disabled */}
    <RangeSlider 
      disabled={true} 
      value={[0.3, 0.6]} 
    />

    {/* Smooth transitions when values are updated via code */}
    <RangeSlider 
      animateTransitions={true} 
      animationType="spring" 
      value={[0.1, 0.9]} 
    />

    {/* Callback handling */}
    <RangeSlider 
      onValueChange={(values) => console.log("Low:", values[0], "High:", values[1])}
    />
  </DemoBlock>
);
