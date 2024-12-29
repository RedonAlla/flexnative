import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Helper text'>
        <Block gap={DEMO_COMPONENT_GAP}>
          
          <NumericTextBox
            material
            label='Label'
            placeholder='input with helper text'
            helperText="Helper text"
          />

        </Block>
      </DemoBlock>
    );
  }
}