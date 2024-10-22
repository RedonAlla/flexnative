import React from 'react';

// highlight-next-line
import Badge from '@flexnative/badges';
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Badge text='10' type='ghost' color='primary' borderWidth='none'>
          <Button text="none (default)"/>
        </Badge>
        <Badge text='10' type='ghost' color='primary' borderWidth='hairline'>
          <Button text="hairline"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='thin'>
          <Button text="thin"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='base'>
          <Button text="base"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth='thick'>
          <Button text="thick"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderWidth={2}>
          <Button text="2"/>
        </Badge>
      </div>
    );
  }
}