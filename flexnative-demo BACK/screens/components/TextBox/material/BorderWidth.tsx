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
            <TextBox material label='Border Width' placeholder='none (default)' borderWidth='none' />
            <TextBox material label='Border Width' placeholder='hairline' borderWidth='hairline' />
            <TextBox material label='Border Width' placeholder='thin' borderWidth='thin' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox material label='Border Width' placeholder='base' borderWidth='base' />
            <TextBox material label='Border Width' placeholder='thick' borderWidth='thick' />
            <TextBox material label='Border Width' placeholder='3' borderWidth={3}/>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}