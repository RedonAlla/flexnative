import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox material label='Color' placeholder='primary' color='primary'/>
            <TextBox material label='Color' placeholder='dark' color='dark'/>
            <TextBox material label='Color' placeholder='info' color='info'/>
            <TextBox material label='Color' placeholder='warning' color='warning' />
            <TextBox material label='Color' placeholder='default' color='default'/>
            <TextBox material label='Color' placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
            <TextBox material label='Color' placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
            <TextBox material label='Color' placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox material label='Color' placeholder='secondary' color='secondary'/>
            <TextBox material label='Color' placeholder='light' color='light'/>
            <TextBox material label='Color' placeholder='success' color='success'/>
            <TextBox material label='Color' placeholder='error' color='error'/>
            <TextBox material label='Color' placeholder='crimson' color='crimson'/>
            <TextBox material label='Color' placeholder='#ed143d' color='#ed143d'/>
            <TextBox material label='Color' placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
            <TextBox material label='Color' placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}