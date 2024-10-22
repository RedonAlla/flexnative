import React from 'react';

// highlight-next-line
import Badge from '@flexnative/badges';
import Button from '@flexnative/buttons';



export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Badge text='10' type='text' color='primary' borderColor='crimson' borderWidth='hairline'>
          <Button text="crimson"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderColor='#ed143d' borderWidth='hairline'>
          <Button text="#ed143d"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderColor='rgb(237, 20, 61)' borderWidth='hairline'>
          <Button text="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' type='text' color='primary' borderColor='rgba(237, 20, 61, 0.5)' borderWidth='hairline'>
          <Button text="rgba(237, 20, 61, 0.5)"/>
        </Badge>
      </div>
    );
  }
}