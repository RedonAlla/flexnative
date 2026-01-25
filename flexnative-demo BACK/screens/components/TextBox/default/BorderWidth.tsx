import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox placeholder='none (default)' borderWidth='none' />
            <TextBox placeholder='hairline' borderWidth='hairline' />
            <TextBox placeholder='thin' borderWidth='thin' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox placeholder='base' borderWidth='base' />
            <TextBox placeholder='thick' borderWidth='thick' />
            <TextBox placeholder='3' borderWidth={3}/>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}