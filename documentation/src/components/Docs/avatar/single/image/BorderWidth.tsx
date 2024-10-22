import React from 'react';

// highlight-start
import Avatar from '@flexnative/avatar';
import { LOGO } from '../../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <Avatar source={LOGO} color='primary' fillMode='none' borderWidth='none'/>
        <Avatar source={LOGO} color='primary' fillMode='none' borderWidth='hairline'/>
        <Avatar source={LOGO} color='primary' fillMode='none' borderWidth='thin'/>
        <Avatar source={LOGO} color='primary' fillMode='none' borderWidth='base'/>
        <Avatar source={LOGO} color='primary' fillMode='none' borderWidth='thick'/>
        <Avatar source={LOGO} color='primary' fillMode='none' borderWidth={2}/>
      </div>
    );
  }
}