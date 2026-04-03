import React from 'react';
import { Slider } from '@flexnative/slider';

export default class TooltipExamples extends React.PureComponent {
  render() {
    return (
      <div className='example-block' style={{display: 'block'}}>
        {/* Custom tooltip colors */}
        <Slider 
          tooltipBackgroundColor="black" 
          tooltipBorderColor="white" 
        />

        {/* Thick border on tooltip */}
        <Slider 
          tooltipBackgroundColor="#333" 
          tooltipBorderColor="cyan" 
          tooltipBorderWidth={2} 
        />
      </div>
    );
  }
}
