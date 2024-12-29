import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class IconColor extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Text Color'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar text='R A' type='text' textColor='crimson'/>
          <Avatar text='R A' type='text' textColor='#ed143d'/>
          <Avatar text='R A' type='text' textColor='rgb(237, 20, 61)'/>
          <Avatar text='R A' type='text' textColor='rgba(237, 20, 61, 0.5)'/>
        </Block>
      </DemoBlock>
    );
  }
}