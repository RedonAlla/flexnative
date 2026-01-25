import React from "react";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border width'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          
          <Tag text='none (default)' borderWidth='none' />
          <Tag text='hairline' borderWidth='hairline' />
          <Tag text='thin' borderWidth='thin' />
          <Tag text='base' borderWidth='base' />
          <Tag text='thick' borderWidth='thick' />
          <Tag text='2' borderWidth={2} />
      
        </Block>
      </DemoBlock>
    );
  }
}