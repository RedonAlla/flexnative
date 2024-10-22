/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-09 21:04:46
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:29:59
 * @ Description: Examples of AvatarGroup component with different Avatar Components type.
 */

import React from 'react';
// highlight-start
import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { LOGO } from '../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>

        {/* Group Avatar with type text */}
        <AvatarGroup>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        {/* Group Avatar with type icon */}
        <AvatarGroup>
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
        </AvatarGroup>

        {/* Group Avatar with type image */}
        <AvatarGroup>
          <Avatar source={LOGO} color='primary' />
          <Avatar source={LOGO} color='primary' />
          <Avatar source={LOGO} color='primary' />
        </AvatarGroup>

        {/* Group Avatar with mixed types */}
        <AvatarGroup>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar source={LOGO} color='primary' />
        </AvatarGroup>

      </div>
    );
  }
}