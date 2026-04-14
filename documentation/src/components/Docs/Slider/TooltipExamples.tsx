import React from 'react';

import { Slider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default class TooltipExamples extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
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
      </DemoBlock>
    );
  }
}
