import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='text' color='primary' type='text' />
        <Button text='ghost' color='primary' type='ghost' />
        <Button text='link' color='primary' type='link' />
        <Button text='inverse' color='primary' type='inverse' />
        <Button text='default' color='primary' />
      </div>
    );
  }
}