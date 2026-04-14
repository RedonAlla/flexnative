import React from 'react';
import { RangeSlider } from '@flexnative/slider';

import { LOGO } from '@site/src/constants/common';
import DemoBlock from '../../common/DemoBlock';


export default () => (
  <DemoBlock>
     {/* Using an icon for both thumbs */}
    <RangeSlider 
      humbImage={LOGO} 
      thumbTintColor="black"
    />

    {/* Custom sizing for the thumbs and track */}
    <RangeSlider 
      thumbStyle={{ width: 32, height: 32, borderRadius: 8 }}
      trackStyle={{ height: 8 }}
    />
  </DemoBlock>
);
