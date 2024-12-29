import React from "react";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox placeholder='none' radius='none'/>
            <TextBox placeholder='medium' radius='medium'/>
            <TextBox placeholder='full radius' radius='full'/>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <TextBox placeholder='small' radius='small'/>
            <TextBox placeholder='large' radius='large' />
            <TextBox placeholder='12' radius={12} />
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}