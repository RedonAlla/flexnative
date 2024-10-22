import React from 'react';

// highlight-start
import Avatar from '@flexnative/avatar';
import { LOGO } from '../../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block align-center'>
        <Avatar source={LOGO} size='small' />
        <Avatar source={LOGO} size='medium' />
        <Avatar source={LOGO} size='large' />
        <Avatar source={LOGO} size={120} />
      </div>
    );
  }
}