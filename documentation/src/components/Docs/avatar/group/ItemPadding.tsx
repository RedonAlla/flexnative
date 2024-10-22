/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-09 23:54:06
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:30:26
 * @ Description: Examples of AvatarGroup component of type text with Item Padding.
 */

import React from 'react';
// highlight-next-line
import Avatar, { AvatarGroup } from '@flexnative/avatar';


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <AvatarGroup itemPadding={15}>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemPadding={25}>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>
      </div>
    );
  }
}