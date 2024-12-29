import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Active Border Color'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='crimson' type='text' borderWidth='thick' activeBorderColor='crimson' />
            <Button text='rgb(237, 20, 61)' type='text' borderWidth='thick' activeBorderColor='rgb(237, 20, 61)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='rgba(237, 20, 61, 1)' type='text' borderWidth='thick' activeBorderColor='rgba(237, 20, 61, 1)' />
            <Button text='#ed143d' type='text' borderWidth='thick' activeBorderColor='#ed143d' />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}