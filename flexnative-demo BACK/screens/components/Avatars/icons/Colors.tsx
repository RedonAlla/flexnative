import React from "react";

import Avatar from "@flexnative/avatar";
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class Colors extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
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
        </Block>
      </DemoBlock>
    );
  }
}