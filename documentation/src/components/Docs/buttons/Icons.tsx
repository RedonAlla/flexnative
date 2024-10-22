import React from 'react';

// highlight-next-line
import Button from '@flexnative/buttons';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <p className='session-title'>Icon on left side</p>

        <div className='example-block'>
          <Button color='primary' iconLeft='star' />
          <Button color='primary' radius='full' iconLeft='star' />

          <Button text='default' color='primary' iconLeft='star' />
          <Button text='Custom colors' color='primary' iconLeft={{name: 'star', color: '#072541', activeColor: '#FFAE10'}} />
        </div>

        <p className='session-title'>Icon on left side</p>

        <div className='example-block'>
          <Button color='primary' iconRight='star' />
          <Button color='primary' radius='full' iconRight='star' />

          <Button text='default' color='primary' iconRight='star' />
          <Button text='Custom colors' color='primary' iconRight={{name: 'star', color: '#072541', activeColor: '#FFAE10'}} />
        </div>
      </>
    );
  }
}