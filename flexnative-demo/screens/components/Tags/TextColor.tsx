import React from "react";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Text Color'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          
          {/* TODO */}
          <Tag text='crimson' textColor='crimson'/>
          <Tag text='#ed143d' textColor='#ed143d'/>
          <Tag text='rgb(237, 20, 61)' textColor='rgb(237, 20, 61)'/>
          <Tag text='rgba(237, 20, 61, 0.5)' textColor='rgba(237, 20, 61, 0.5)'/>
      
        </Block>
      </DemoBlock>
    );
  }
}