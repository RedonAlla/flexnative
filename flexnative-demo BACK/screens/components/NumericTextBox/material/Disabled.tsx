import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Disabled'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <NumericTextBox material label='Label' placeholder='outlined' type='outlined' disabled />
          <NumericTextBox material label='Label' placeholder='underlined' type='underlined' disabled />

        </Block>
      </DemoBlock>
    );
  }
}