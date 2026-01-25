import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Flex'>
        <Block flex={0}></Block>
        <Block flex={2}></Block>
        <Block flex={1.5}></Block>
      </DemoBlock>
    );
  }
}