import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='crimson' type='text' borderWidth='thick' borderColor='crimson' />
            <Button text='rgb(237, 20, 61)' type='text' borderWidth='thick' borderColor='rgb(237, 20, 61)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='rgba(237, 20, 61, 0.5)' type='text' borderWidth='thick' borderColor='rgba(237, 20, 61, 0.5)' />
            <Button text='#ed143d' type='text' borderWidth='thick' borderColor='#ed143d' />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}