import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class Colors extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='primary' color='primary'/>
            <NumericTextBox placeholder='dark' color='dark'/>
            <NumericTextBox placeholder='info' color='info'/>
            <NumericTextBox placeholder='warning' color='warning' />
            <NumericTextBox placeholder='default' color='default'/>
            <NumericTextBox placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
            <NumericTextBox placeholder='hwb(349 8% 7%)' color='hwb(349 8% 7%)'/>
            <NumericTextBox placeholder='hsl(349, 86%, 50%)' color='hsl(349, 86%, 50%)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='secondary' color='secondary'/>
            <NumericTextBox placeholder='light' color='light'/>
            <NumericTextBox placeholder='success' color='success'/>
            <NumericTextBox placeholder='error' color='error'/>
            <NumericTextBox placeholder='crimson' color='crimson'/>
            <NumericTextBox placeholder='#ed143d' color='#ed143d'/>
            <NumericTextBox placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
            <NumericTextBox placeholder='hsla(349, 86%, 50% / 0.5)' color='hsla(349, 86%, 50% / 0.5)' />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}