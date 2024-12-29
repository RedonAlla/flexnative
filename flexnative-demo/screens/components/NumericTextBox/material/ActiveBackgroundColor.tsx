import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class ActiveBackgroundColor extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Active Background Color'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox
              material
              label='crimson'
              placeholder='crimson'
              activeBackgroundColor='crimson'
            />

            <NumericTextBox 
              material
              label='rgb(237, 20, 61)'
              placeholder='rgb(237, 20, 61)'
              activeBackgroundColor='rgb(237, 20, 61)'
            />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox
              material
              label='rgba(237, 20, 61, 1)'
              placeholder='rgba(237, 20, 61, 1)'
              activeBackgroundColor='rgba(237, 20, 61, 1)'
            />
            <NumericTextBox
              material
              label='#ed143d'
              placeholder='#ed143d'
              activeBackgroundColor='#ed143d'
            />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}