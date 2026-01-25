import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import GhostTypeMessage from "@/components/common/Demo/GhostTypeMessage";


export default class FillMode extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Fill Mode'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap' style={{marginBottom: DEMO_COMPONENT_GAP}}>
          <Avatar text='R A' type='text' color='primary' fillMode='solid' />
          <Avatar text='R A' type='text' color='primary' fillMode='none' />
          <Avatar text='R A' type='text' color='primary' fillMode='ghost' />
        </Block>
        <GhostTypeMessage />
      </DemoBlock>
    );
  }
}