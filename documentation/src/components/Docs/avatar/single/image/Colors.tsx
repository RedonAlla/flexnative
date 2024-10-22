import React from 'react';

// highlight-start
import Avatar from '@flexnative/avatar';
import { LOGO } from '../../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={LOGO} color='primary'/>
        <Avatar source={LOGO} color='secondary'/>
        <Avatar source={LOGO} color='success'/>
        <Avatar source={LOGO} color='info'/>
        <Avatar source={LOGO} color='warning' />
        <Avatar source={LOGO} color='error'/>
        <Avatar source={LOGO} color='default'/>
        <Avatar source={LOGO} color='dark'/>
        <Avatar source={LOGO} color='light'/>

        <Avatar source={LOGO} color='crimson'/>
        <Avatar source={LOGO} color='#ed143d'/>
        <Avatar source={LOGO} color='rgb(237, 20, 61)'/>
        <Avatar source={LOGO} color='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}