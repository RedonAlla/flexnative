import React from 'react';

// highlight-next-line
import Badge from '@flexnative/badges';
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Badge text='10' textColor='crimson'>
          <Button text="crimson"/>
        </Badge>
        <Badge text='10' textColor='#ed143d'>
          <Button text="#ed143d"/>
        </Badge>
        <Badge text='10' textColor='rgb(237, 20, 61)'>
          <Button text="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' textColor='rgba(237, 20, 61, 0.5)'>
          <Button text="rgba(237, 20, 61, 0.5)"/>
        </Badge>
      </div>
    );
  }
}