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
            <TextBox placeholder='primary' color='primary'/>
            <TextBox placeholder='dark' color='dark'/>
            <TextBox placeholder='info' color='info'/>
            <TextBox placeholder='warning' color='warning' />
            <TextBox placeholder='default' color='default'/>
            <TextBox placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
            <TextBox placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
            <TextBox placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox placeholder='secondary' color='secondary'/>
            <TextBox placeholder='light' color='light'/>
            <TextBox placeholder='success' color='success'/>
            <TextBox placeholder='error' color='error'/>
            <TextBox placeholder='crimson' color='crimson'/>
            <TextBox placeholder='#ed143d' color='#ed143d'/>
            <TextBox placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
            <TextBox placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}