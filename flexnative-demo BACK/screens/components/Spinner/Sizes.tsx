import React from "react";
import { Spinner } from "@flexnative/icons";
import DemoBlock from "@/components/common/DemoBlock";
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap' align="center">
          <Spinner name='spinner' />
          <Spinner name='spinner' size={16} />
          <Spinner name='spinner' size={18} />
          <Spinner name='spinner' size={24} />
          <Spinner name='spinner' size={32} />
          <Spinner name='spinner' size={64} />
        </Block>  
      </DemoBlock>
    );
  }
}