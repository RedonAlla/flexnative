import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <NumericTextBox material label='Label' placeholder='small' size='small' />
          <NumericTextBox material label='Label' placeholder='25' size={25} />
        </Block>

        <Block row gap={DEMO_COMPONENT_GAP}>
          <NumericTextBox material label='Label' placeholder='large' size='large' />
          <NumericTextBox material label='Label' placeholder='medium' size='medium' />
        </Block>
      </DemoBlock>
    );
  }
}