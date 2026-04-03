import React from 'react';
import { Slider } from '@flexnative/slider';

export default class InteractionExamples extends React.PureComponent {
  render() {
    return (
      <div className='example-block' style={{display: 'block'}}>
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
      </div>
    );
  }
}
