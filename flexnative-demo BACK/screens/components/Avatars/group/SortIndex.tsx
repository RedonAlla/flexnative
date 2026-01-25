import React from "react";

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class SortIndex extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sort Index'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap' >
          <AvatarGroup sortIndex='asc'>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>

          <AvatarGroup sortIndex='desc'>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
            <Avatar text='R A' type='text' color='primary' />
          </AvatarGroup>
        </Block>
      </DemoBlock>
    );
  }
}