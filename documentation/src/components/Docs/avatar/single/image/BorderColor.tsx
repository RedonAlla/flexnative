import React from 'react';

// highlight-start
import Avatar from '@flexnative/avatar';
import { LOGO } from '../../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={LOGO} color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>
        <Avatar source={LOGO} color='primary' borderWidth='thin' fillMode='ghost' borderColor='#ed143d'/>
        <Avatar source={LOGO} color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgb(237, 20, 61)'/>
        <Avatar source={LOGO} color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgba(237, 20, 61, 0.5)'/>
      </div>
    );
  }
}