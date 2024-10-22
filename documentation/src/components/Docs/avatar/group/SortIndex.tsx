/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-09 23:44:15
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:30:48
 * @ Description: Examples of AvatarGroup component of type text with SortIndex.
 */

import React from 'react';
// highlight-next-line
import Avatar, { AvatarGroup } from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <AvatarGroup sortIndex='asc'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup sortIndex='desc'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>
      </div>
    );
  }
}