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
          <Avatar text='R A' type='text' radius='none' />
          <Avatar text='R A' type='text' radius='small' />
          <Avatar text='R A' type='text' radius='medium' />
          <Avatar text='R A' type='text' radius='large' />
          <Avatar text='R A' type='text' radius='full' />
          <Avatar text='R A' type='text' radius={15} />
        </Block>
      </DemoBlock>
    );
  }
}