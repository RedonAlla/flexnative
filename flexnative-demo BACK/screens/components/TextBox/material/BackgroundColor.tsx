import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox label='Background Color' placeholder='crimson' backgroundColor='crimson' material />
            <TextBox label='Background Color' placeholder='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)' material />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox label='Background Color' placeholder='rgba(237, 20, 61, 1)' backgroundColor='rgba(237, 20, 61, 1)' material />
            <TextBox label='Background Color' placeholder='#ed143d' backgroundColor='#ed143d' material />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}