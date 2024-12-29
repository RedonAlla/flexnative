import React from "react";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import GhostTypeMessage from "@/components/common/Demo/GhostTypeMessage";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Types'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap' style={{marginBottom: DEMO_COMPONENT_GAP}}>
          
          <Tag text='default' type='default' />
          <Tag text='ghost' type='ghost' />
          <Tag text='text' type='text' />
      
        </Block>

        <GhostTypeMessage />
      </DemoBlock>
    );
  }
}