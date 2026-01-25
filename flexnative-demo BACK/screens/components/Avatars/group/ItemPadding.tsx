import React from "react";

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class ItemPadding extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Item Padding'>
        <Block row flex={1} columnGap={DEMO_COMPONENT_GAP} wrap='wrap' >
          <AvatarGroup itemPadding={5}>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>

          <AvatarGroup itemPadding={25}>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>
        </Block>
      </DemoBlock>
    );
  }
}