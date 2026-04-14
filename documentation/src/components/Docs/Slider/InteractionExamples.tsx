import React from 'react';

import { Slider } from '@flexnative/slider';
import DemoBlock from '../../common/DemoBlock';


export default class InteractionExamples extends React.PureComponent {
  render() {
    return (
      <DemoBlock>
        {/* Disabled slider */}
        <Slider disabled={true} value={0.5} />

        {/* Spring animation when value changes programmatically */}
        <Slider 
          animateTransitions={true} 
          animationType="spring" 
          value={0.8} 
        />

        {/* Event callbacks */}
        <Slider 
          onValueChange={(val) => console.log("Changing:", val)}
          onSlidingComplete={(val) => console.log("Finished at:", val)}
        />
      </DemoBlock>
    );
  }
}
