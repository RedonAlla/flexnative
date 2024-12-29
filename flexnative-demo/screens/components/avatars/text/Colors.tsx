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
        </Block>
      </DemoBlock>
    );
  }
}