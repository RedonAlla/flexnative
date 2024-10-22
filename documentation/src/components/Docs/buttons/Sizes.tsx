import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block inline-grid'>
        <div>
          <Button text='small' color='primary' size='small' />
        </div>
        <div>
          <Button text='default' color='primary' size='default' />
        </div>
        <div>
          <Button text='medium' color='primary' size='medium' />
        </div>
        <div>
          <Button text='large' color='primary' size='large' />
        </div>
      </div>
    );
  }
}