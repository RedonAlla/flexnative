/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-09 23:48:05
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:30:07
 * @ Description: Examples of AvatarGroup component of type text with Item Borders color.
 */

import React from 'react';
// highlight-next-line
import Avatar, { AvatarGroup } from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <AvatarGroup itemBorderColor='crimson'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderColor='rgba(237, 20, 61, 0.5)'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderColor='rgb(237, 20, 61)'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderColor='#ed143d'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>
      </div>
    );
  }
}