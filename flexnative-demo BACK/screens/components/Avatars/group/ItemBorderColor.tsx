import React from "react";

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class ItemBorderColor extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Item Border Color'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <AvatarGroup itemBorderColor='crimson'>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>

          <AvatarGroup itemBorderColor='rgba(237, 20, 61, 0.5)'>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>

          <AvatarGroup itemBorderColor='rgb(237, 20, 61)'>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>

          <AvatarGroup itemBorderColor='#ed143d'>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>
        </Block>
      </DemoBlock>
    );
  }
}