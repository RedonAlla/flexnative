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
            <TextBox placeholder='crimson' activeBackgroundColor='crimson' />
            <TextBox placeholder='rgb(237, 20, 61)' activeBackgroundColor='rgb(237, 20, 61)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox placeholder='rgba(237, 20, 61, 1)' activeBackgroundColor='rgba(237, 20, 61, 1)' />
            <TextBox placeholder='#ed143d' activeBackgroundColor='#ed143d' />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}