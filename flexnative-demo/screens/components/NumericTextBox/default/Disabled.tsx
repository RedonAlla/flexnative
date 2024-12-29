import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Disabled'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <NumericTextBox placeholder='outlined' type='outlined' disabled />
          <NumericTextBox placeholder='underlined' type='underlined' disabled />

        </Block>
      </DemoBlock>
    );
  }
}