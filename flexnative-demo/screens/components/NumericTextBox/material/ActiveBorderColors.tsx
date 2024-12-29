import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class ActiveBorderColors extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Active Border Colors'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox
              material
              label='crimson'
              activeBorderColor='crimson'
              placeholder='crimson'
            />
            <NumericTextBox
              material
              label='rgb(237, 20, 61)'
              activeBorderColor='rgb(237, 20, 61)'
              placeholder='rgb(237, 20, 61)'
            />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox
              material
              label='rgb(237, 20, 61)'
              activeBorderColor='rgb(237, 20, 61)'
              placeholder='rgb(237, 20, 61)'
            />
            <NumericTextBox
              material
              label='#ed143d'
              activeBorderColor='#ed143d'
              placeholder='#ed143d'
            />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}