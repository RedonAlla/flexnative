import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox material label='Label' placeholder='none (default)' borderWidth='none' />
            <NumericTextBox material label='Label' placeholder='hairline' borderWidth='hairline' />
            <NumericTextBox material label='Label' placeholder='thin' borderWidth='thin' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox material label='Label' placeholder='base' borderWidth='base' />
            <NumericTextBox material label='Label' placeholder='thick' borderWidth='thick' />
            <NumericTextBox material label='Label' placeholder='3' borderWidth={3}/>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}