import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";

//const image = require('../../assets/')


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color'>
        <Avatar text='R A' type='text' color='primary'/>
        <Avatar text='R A' type='text' color='secondary'/>
        <Avatar text='R A' type='text' color='success'/>
        <Avatar text='R A' type='text' color='info'/>
        <Avatar text='R A' type='text' color='warning' />
        <Avatar text='R A' type='text' color='error'/>
        <Avatar text='R A' type='text' color='default'/>
        <Avatar text='R A' type='text' color='dark'/>
        <Avatar text='R A' type='text' color='light'/>
        <Avatar text='R A' type='text' color='crimson'/>
        <Avatar text='R A' type='text' color='#ed143d'/>
        <Avatar text='R A' type='text' color='rgb(237, 20, 61)'/>
        <Avatar text='R A' type='text' color='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}