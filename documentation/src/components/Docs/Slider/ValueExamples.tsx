import React from 'react';
import { Slider } from '@flexnative/slider';

export default class ValueExamples extends React.PureComponent {
  render() {
    return (
      <div className='example-block' style={{display: 'block'}}>
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
      </div>
    );
  }
}