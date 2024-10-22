/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-10 21:06:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:32:32
 * @ Description: Examples of Avatar component of type `icon` with Border width.
 */

import React from 'react';
// highlight-next-line
import Avatar from '@flexnative/avatar';

export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='none'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='hairline'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='thin'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='base'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth='thick'/>
        <Avatar icon='avatar' type='icon' fillMode='none' borderWidth={2}/>
      </div>
    );
  }
}