import React from "react";

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class ItemBorderWidth extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Item Border Width'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Block>
            <AvatarGroup itemBorderWidth='none'>
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
            </AvatarGroup>
          </Block>

          <Block>
            <AvatarGroup itemBorderWidth='hairline'>
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
            </AvatarGroup>
          </Block>

          <Block>
            <AvatarGroup itemBorderWidth='thin'>
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
            </AvatarGroup>
          </Block>

          <Block>
            <AvatarGroup itemBorderWidth='base'>
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
            </AvatarGroup>
          </Block>

          <Block>
            <AvatarGroup itemBorderWidth='thick'>
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
            </AvatarGroup>
          </Block>

          <Block>
            <AvatarGroup itemBorderWidth={2}>
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
              <Avatar text='R A' type='text' color='primary' />
            </AvatarGroup>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}