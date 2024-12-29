import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Active Background Color'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox label='Active Background Color' placeholder='crimson' activeBackgroundColor='crimson' material />
            <TextBox label='Active Background Color' placeholder='rgb(237, 20, 61)' activeBackgroundColor='rgb(237, 20, 61)' material />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox label='Active Background Color' placeholder='rgba(237, 20, 61, 1)' activeBackgroundColor='rgba(237, 20, 61, 1)' material />
            <TextBox label='Active Background Color' placeholder='#ed143d' activeBackgroundColor='#ed143d' material />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}