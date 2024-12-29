import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='none' radius='none'/>
            <NumericTextBox placeholder='medium' radius='medium'/>
            <NumericTextBox placeholder='full radius' radius='full'/>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox placeholder='small' radius='small'/>
            <NumericTextBox placeholder='large' radius='large' />
            <NumericTextBox placeholder='12' radius={12} />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}