import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='crimson' color='primary' activeColor='crimson' />
        <Button text='#ed143d' color='primary' activeColor='#ed143d' />
        <Button text='rgb(237, 20, 61)' color='primary' activeColor='rgb(237, 20, 61)' />
        <Button text='rgba(237, 20, 61, 0.5)' color='primary' activeColor='rgba(237, 20, 61, 0.5)' />
      </div>
    );
  }
}