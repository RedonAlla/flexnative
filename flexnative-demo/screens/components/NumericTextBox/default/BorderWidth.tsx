import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='none (default)' borderWidth='none' />
            <NumericTextBox placeholder='hairline' borderWidth='hairline' />
            <NumericTextBox placeholder='thin' borderWidth='thin' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='base' borderWidth='base' />
            <NumericTextBox placeholder='thick' borderWidth='thick' />
            <NumericTextBox placeholder='3' borderWidth={3}/>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}