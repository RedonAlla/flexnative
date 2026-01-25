import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Disabled'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <TextBox material label='Disabled' placeholder='outlined' type='outlined' disabled />
          <TextBox material label='Disabled' placeholder='underlined' type='underlined' disabled />

        </Block>
      </DemoBlock>
    );
  }
}