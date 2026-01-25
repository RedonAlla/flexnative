import React from "react";

import Message from "@flexnative/messages";
import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class Actions extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Actions'>
        <Block row gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 1.5}}>
          <NumericTextBox placeholder='With actions' />
          <NumericTextBox placeholder='Without actions' actions={false} />
        </Block>

        <Message text="As NumericTextBox you can use also the TextBox with property `keyboardType='numeric'`" color="warning" />
      </DemoBlock>
    );
  }
}