import React from 'react';

import { Slider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default class ValueExamples extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
        {/* Basic 0 to 1 range (Default) */}
        <Slider value={0.5} />

        {/* Percentage range 0 to 100 */}
        <Slider 
          value={25} 
          minimumValue={0} 
          maximumValue={100} 
        />

        {/* Custom bounds with negative values */}
        <Slider 
          value={0} 
          minimumValue={-50} 
          maximumValue={50} 
        />
      </DemoBlock>
    );
  }
}