import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Read Only'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          
          <TextBox material label='Read Only Style' placeholder='outlined' type='outlined' readOnly />
          <TextBox material label='Read Only Style' placeholder='underlined' type='underlined' readOnly />

        </Block>
      </DemoBlock>
    );
  }
}