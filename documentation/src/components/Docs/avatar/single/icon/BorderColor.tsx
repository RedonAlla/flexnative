/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-10 20:57:43
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:32:07
 * @ Description: Examples of Avatar component of type `icon` with border color.
 */

import React from 'react';
// highlight-next-line
import Avatar from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='crimson'/>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' borderWidth='thin' borderColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}