import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Type'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <TextBox material label='Type' placeholder='outlined' type='outlined' />
          <TextBox material label='Type' placeholder='outlined' type='outlined' />

        </Block>
      </DemoBlock>
    );
  }
}