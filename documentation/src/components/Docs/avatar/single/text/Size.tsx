import React from 'react';

// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block align-center'>
        <Avatar text='R A' type='text' size='small' />
        <Avatar text='R A' type='text' size='medium' />
        <Avatar text='R A' type='text' size='large' />
        <Avatar text='R A' type='text' size={120} />
      </div>
    );
  }
}