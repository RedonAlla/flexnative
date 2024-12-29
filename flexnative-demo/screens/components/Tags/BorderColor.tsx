import React from "react";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          
          <Tag borderWidth='thin' text='crimson' borderColor='crimson'/>
          <Tag borderWidth='thin' text='#ed143d' borderColor='#ed143d'/>
          <Tag borderWidth='thin' text='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)'/>
          <Tag borderWidth='thin' text='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)'/>
      
        </Block>
      </DemoBlock>
    );
  }
}