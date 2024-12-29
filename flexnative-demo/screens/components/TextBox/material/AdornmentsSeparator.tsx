import React from "react";

import { TextBox } from '@flexnative/inputs';
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Adornments Separator'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <TextBox label='Prefix Separator' placeholder='Prefix Separator' prefix="avatar" prefixSeparator material />
          <TextBox label='Suffix Separator' placeholder='Suffix Separator' suffix="avatar" suffixSeparator material />
        </Block>
      </DemoBlock>
    );
  }
}