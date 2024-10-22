import React from 'react';

// highlight-start
import Avatar from '@flexnative/avatar';
import { LOGO } from '../../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={LOGO} backgroundColor='crimson'/>
        <Avatar source={LOGO} backgroundColor='#ed143d'/>
        <Avatar source={LOGO} backgroundColor='rgb(237, 20, 61)'/>
        <Avatar source={LOGO} backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}