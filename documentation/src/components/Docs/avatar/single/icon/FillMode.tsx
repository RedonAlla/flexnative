import React from 'react';

// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='solid' />
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' />
        <Avatar icon='avatar' type='icon' color='primary' fillMode='ghost' />
      </div>
    );
  }
}