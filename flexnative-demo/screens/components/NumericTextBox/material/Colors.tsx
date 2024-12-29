import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class Colors extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox material label='Label' placeholder='primary' color='primary'/>
            <NumericTextBox material label='Label' placeholder='dark' color='dark'/>
            <NumericTextBox material label='Label' placeholder='info' color='info'/>
            <NumericTextBox material label='Label' placeholder='warning' color='warning' />
            <NumericTextBox material label='Label' placeholder='default' color='default'/>
            <NumericTextBox material label='Label' placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
            <NumericTextBox material label='Label' placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
            <NumericTextBox material label='Label' placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox material label='Label' placeholder='secondary' color='secondary'/>
            <NumericTextBox material label='Label' placeholder='light' color='light'/>
            <NumericTextBox material label='Label' placeholder='success' color='success'/>
            <NumericTextBox material label='Label' placeholder='error' color='error'/>
            <NumericTextBox material label='Label' placeholder='crimson' color='crimson'/>
            <NumericTextBox material label='Label' placeholder='#ed143d' color='#ed143d'/>
            <NumericTextBox material label='Label' placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
            <NumericTextBox material label='Label' placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}