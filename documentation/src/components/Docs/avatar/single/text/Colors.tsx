import React from 'react';

// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar text='R A' type='text' color='primary'/>
        <Avatar text='R A' type='text' color='secondary'/>
        <Avatar text='R A' type='text' color='success'/>
        <Avatar text='R A' type='text' color='info'/>
        <Avatar text='R A' type='text' color='warning' />
        <Avatar text='R A' type='text' color='error'/>
        <Avatar text='R A' type='text' color='default'/>
        <Avatar text='R A' type='text' color='dark'/>
        <Avatar text='R A' type='text' color='light'/>

        <Avatar text='R A' type='text' color='crimson'/>
        <Avatar text='R A' type='text' color='#ed143d'/>
        <Avatar text='R A' type='text' color='rgb(237, 20, 61)'/>
        <Avatar text='R A' type='text' color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}