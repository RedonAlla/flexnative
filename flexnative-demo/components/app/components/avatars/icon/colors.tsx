import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";

//const image = require('../../assets/')


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color'>
        <Avatar icon='avatar' type='icon' color='primary'/>
        <Avatar icon='avatar' type='icon' color='secondary'/>
        <Avatar icon='avatar' type='icon' color='success'/>
        <Avatar icon='avatar' type='icon' color='info'/>
        <Avatar icon='avatar' type='icon' color='warning' />
        <Avatar icon='avatar' type='icon' color='error'/>
        <Avatar icon='avatar' type='icon' color='default'/>
        <Avatar icon='avatar' type='icon' color='dark'/>
        <Avatar icon='avatar' type='icon' color='light'/>
        <Avatar icon='avatar' type='icon' color='crimson'/>
        <Avatar icon='avatar' type='icon' color='#ed143d'/>
        <Avatar icon='avatar' type='icon' color='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' color='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}