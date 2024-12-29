import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Active Border Colors'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox label='Active Border Color' activeBorderColor='crimson' placeholder='crimson' material />
            <TextBox label='Active Border Color' activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' material />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox label='Active Border Color' activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' material />
            <TextBox label='Active Border Color' activeBorderColor='#ed143d' placeholder='#ed143d' material />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}