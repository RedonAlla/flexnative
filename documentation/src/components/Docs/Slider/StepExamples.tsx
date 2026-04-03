import React from 'react';
import { Slider } from '@flexnative/slider';

export default class StepExamples extends React.PureComponent {
  render() {
    return (
      <div className='example-block' style={{display: 'block'}}>
        {/* Integer steps of 1 */}
        <Slider value={3} step={1} minimumValue={0} maximumValue={10} />

        {/* Decimal steps of 0.1 */}
        <Slider step={0.3} minimumValue={0} maximumValue={1} />

        {/* Snap to specific values only */}
        <Slider 
          snapPoints={[0, 0.25, 0.5, 0.75, 1]} value={0.5} 
        />

        {/* Hide the visual step indicators/labels */}
        <Slider step={0.2} hideSteps={true} />
      </div>
    );
  }
}
