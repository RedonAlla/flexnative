/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-10 20:53:54
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:31:42
 * @ Description: Examples of Avatar component of type `icon` with Background color.
 */

import React from 'react';
// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' backgroundColor='crimson'/>
        <Avatar icon='avatar' type='icon' backgroundColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' backgroundColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}