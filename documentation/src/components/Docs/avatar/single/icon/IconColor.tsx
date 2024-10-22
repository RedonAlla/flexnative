import React from 'react';

// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' iconColor='crimson'/>
        <Avatar icon='avatar' type='icon' iconColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' iconColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' iconColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}