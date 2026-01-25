import React from "react";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          
          <Tag text='none' radius='none' />
          <Tag text='small' radius='small' />
          <Tag text='medium (default)' radius='medium' />
          <Tag text='large' radius='large' />
          <Tag text='full' radius='full' />
          <Tag text='5' radius={5} />
      
        </Block>
      </DemoBlock>
    );
  }
}