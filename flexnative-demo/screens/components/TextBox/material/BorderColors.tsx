import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Colors'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox material label='Border Color' placeholder='crimson' borderColor='crimson' />
            <TextBox material label='Border Color' placeholder='#ed143d' borderColor='#ed143d' />
            <TextBox material label='Border Color' placeholder='hwb(349 8% 7%)' borderColor='hwb(349 8% 7%)' />
            <TextBox material label='Border Color' placeholder='rgba(237, 20, 61 / 0.5)' borderColor='rgba(237, 20, 61 / 0.5)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox material label='Border Color' placeholder='rgb(237, 20, 61)' borderColor='rgb(237, 20, 61)' />
            <TextBox material label='Border Color' placeholder='rgba(237, 20, 61, 0.5)' borderColor='rgba(237, 20, 61, 0.5)' />
            <TextBox material label='Border Color' placeholder='hsl(349, 86%, 50%)' borderColor='hsl(349, 86%, 50%)' />
            <TextBox material label='Border Color' placeholder='hsla(349, 86%, 50% / 0.5)' borderColor='hsla(349, 86%, 50% / 0.5)' />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}