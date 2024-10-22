import React from 'react';

// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' color='primary' fillMode='solid' />
        <Avatar text='R A' type='text' color='primary' fillMode='none' />
        <Avatar text='R A' type='text' color='primary' fillMode='ghost' />
      </div>
    );
  }
}