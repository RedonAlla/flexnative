import React from "react";

import { TextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block gap={DEMO_COMPONENT_GAP}>
          <Block row gap={DEMO_COMPONENT_GAP}>
            <TextBox material label='Sizes' placeholder='small' size='small' />
            <TextBox material label='Sizes' placeholder='medium' size='medium' />
          </Block>

          <Block row gap={DEMO_COMPONENT_GAP} >
            <TextBox material label='Sizes' placeholder='large' size='large' />
            <TextBox material label='Sizes' placeholder='25' size={25} />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}