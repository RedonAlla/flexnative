import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Helper text'>
        <Block gap={DEMO_COMPONENT_GAP}>
          
          <TextBox material label='Helper text' placeholder='input with helper text' helperText="Helper text" />

        </Block>
      </DemoBlock>
    );
  }
}