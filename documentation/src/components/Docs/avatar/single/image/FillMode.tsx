import React from 'react';

// highlight-start
import Avatar from '@flexnative/avatar';
import { LOGO } from '../../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={LOGO} color='primary' fillMode='solid' />
        <Avatar source={LOGO} color='primary' fillMode='none' />
        <Avatar source={LOGO} color='primary' fillMode='ghost' />
      </div>
    );
  }
}