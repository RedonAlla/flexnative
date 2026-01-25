import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox material label='Label' placeholder='none' radius='none'/>
            <NumericTextBox material label='Label' placeholder='medium' radius='medium'/>
            <NumericTextBox material label='Label' placeholder='full radius' radius='full'/>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <NumericTextBox material label='Label' placeholder='small' radius='small'/>
            <NumericTextBox material label='Label' placeholder='large' radius='large' />
            <NumericTextBox material label='Label' placeholder='12' radius={12} />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}