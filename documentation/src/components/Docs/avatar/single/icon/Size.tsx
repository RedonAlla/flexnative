import React from 'react';

// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block align-center'>
        <Avatar icon='avatar' type='icon' size='small' />
        <Avatar icon='avatar' type='icon' size='medium' />
        <Avatar icon='avatar' type='icon' size='large' />
        <Avatar icon='avatar' type='icon' size={120} />
      </div>
    );
  }
}