import React from "react";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          
          <Tag text='primary' color='primary'/>
          <Tag text='secondary' color='secondary'/>
          <Tag text='success' color='success'/>
          <Tag text='info' color='info'/>
          <Tag text='warning' color='warning' />
          <Tag text='error' color='error'/>
          <Tag text='default' color='default'/>
          <Tag text='dark' color='dark'/>
          <Tag text='light' color='light'/>
          <Tag text='crimson' color='crimson'/>
          <Tag text='#ed143d' color='#ed143d'/>
          <Tag text='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          <Tag text='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
      
        </Block>
      </DemoBlock>
    );
  }
}