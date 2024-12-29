import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class Radius extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Radius'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar icon='avatar' type='icon' radius='none' />
          <Avatar icon='avatar' type='icon' radius='small' />
          <Avatar icon='avatar' type='icon' radius='medium' />
          <Avatar icon='avatar' type='icon' radius='large' />
          <Avatar icon='avatar' type='icon' radius='full' />
          <Avatar icon='avatar' type='icon' radius={15} />
        </Block>
      </DemoBlock>
    );
  }
}