import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color'>
        <Avatar source={avatar} color='primary'/>
        <Avatar source={avatar} color='secondary'/>
        <Avatar source={avatar} color='success'/>
        <Avatar source={avatar} color='info'/>
        <Avatar source={avatar} color='warning' />
        <Avatar source={avatar} color='error'/>
        <Avatar source={avatar} color='default'/>
        <Avatar source={avatar} color='dark'/>
        <Avatar source={avatar} color='light'/>

        <Avatar source={avatar} color='crimson'/>
        <Avatar source={avatar} color='#ed143d'/>
        <Avatar source={avatar} color='rgb(237, 20, 61)'/>
        <Avatar source={avatar} color='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}