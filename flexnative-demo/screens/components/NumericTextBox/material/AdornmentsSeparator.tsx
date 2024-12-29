import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class AdornmentsSeparator extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Adornments Separator'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <NumericTextBox
            material
            label='Label'
            placeholder='Prefix Separator'
            prefix="avatar"
            prefixSeparator
          />
          <NumericTextBox
            material
            label='Label'
            placeholder='Suffix Separator'
            suffix="avatar"
            suffixSeparator
          />
        </Block>
      </DemoBlock>
    );
  }
}