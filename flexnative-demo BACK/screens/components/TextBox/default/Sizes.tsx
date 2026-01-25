import React from "react";

import { TextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox placeholder='small' size='small' />
            <TextBox placeholder='medium' size='medium' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP} style={{ height: 122 }}>
            <TextBox placeholder='large' size='large' />
            <TextBox placeholder='25' size={25} />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}