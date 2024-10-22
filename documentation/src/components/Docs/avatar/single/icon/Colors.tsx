/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-10 20:46:49
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:32:52
 * @ Description: Examples of Avatar component of type `icon` with different colors.
 */

import React from 'react';
// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' color='primary'/>
        <Avatar icon='avatar' type='icon' color='secondary'/>
        <Avatar icon='avatar' type='icon' color='success'/>
        <Avatar icon='avatar' type='icon' color='info'/>
        <Avatar icon='avatar' type='icon' color='warning' />
        <Avatar icon='avatar' type='icon' color='error'/>
        <Avatar icon='avatar' type='icon' color='default'/>
        <Avatar icon='avatar' type='icon' color='dark'/>
        <Avatar icon='avatar' type='icon' color='light'/>

        <Avatar icon='avatar' type='icon' color='crimson'/>
        <Avatar icon='avatar' type='icon' color='#ed143d'/>
        <Avatar icon='avatar' type='icon' color='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}