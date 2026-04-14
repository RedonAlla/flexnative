import React from 'react';

import { RangeSlider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default () => (
  <DemoBlock>
    {/* Discrete steps of 10 */}
    <RangeSlider 
      minimumValue={0} 
      maximumValue={50} 
      step={10} 
    />

    {/* Snap to specific values only */}
    <RangeSlider 
      snapPoints={[0, 0.25, 0.5, 0.75, 1]} 
      value={[0.25, 0.75]} 
    />

    {/* Steps logic enabled but visual indicators hidden */}
    <RangeSlider 
      step={0.1} 
      hideSteps={true} 
    />
  </DemoBlock>
);
