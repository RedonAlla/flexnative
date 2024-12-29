import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class Sizes extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar icon='avatar' type='icon' size='small' />
          <Avatar icon='avatar' type='icon' size='medium' />
          <Avatar icon='avatar' type='icon' size='large' />
          <Avatar icon='avatar' type='icon' size={120} />
        </Block>
      </DemoBlock>
    );
  }
}