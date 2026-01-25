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
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='small' size='small' />
            <NumericTextBox placeholder='medium' size='medium' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP} style={{ height: 122 }}>
            <NumericTextBox placeholder='large' size='large' />
            <NumericTextBox placeholder='25' size={25} />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}