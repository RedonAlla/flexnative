import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class IconColor extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Icon Color'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar icon='avatar' type='icon' iconColor='crimson'/>
          <Avatar icon='avatar' type='icon' iconColor='#ed143d'/>
          <Avatar icon='avatar' type='icon' iconColor='rgb(237, 20, 61)'/>
          <Avatar icon='avatar' type='icon' iconColor='rgba(237, 20, 61, 0.5)'/>
        </Block>
      </DemoBlock>
    );
  }
}