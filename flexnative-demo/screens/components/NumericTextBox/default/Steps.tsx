import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class Steps extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Steps'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='Step 1 (default)' />
            <NumericTextBox placeholder='Step 5' step={5} />
            <NumericTextBox placeholder='Step 10' step={10} />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='Step 50' step={50} />
            <NumericTextBox placeholder='Step 100' step={100} />
            <NumericTextBox placeholder='Step 1000' step={1000} />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}