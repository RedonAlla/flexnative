import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Button text='default' color='primary' />
        <Button color='primary' text={{value: 'Custom colors', color: '#072541', activeColor: '#FFCD4B'}} />
      </div>
    );
  }
}