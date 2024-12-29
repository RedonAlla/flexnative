import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Type'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <NumericTextBox placeholder='outlined' type='outlined' />
          <NumericTextBox placeholder='outlined' type='outlined' />
        </Block>
      </DemoBlock>
    );
  }
}