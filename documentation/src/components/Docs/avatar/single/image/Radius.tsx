import React from 'react';

// highlight-start
import Avatar from '@flexnative/avatar';
import { LOGO } from '../../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={LOGO} radius='none' />
        <Avatar source={LOGO} radius='small' />
        <Avatar source={LOGO} radius='medium' />
        <Avatar source={LOGO} radius='large' />
        <Avatar source={LOGO} radius='full' />
        <Avatar source={LOGO} radius={15} />
      </div>
    );
  }
}