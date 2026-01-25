import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Active Colors'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='crimson' color='primary' activeColor='crimson' />
            <Button text='rgb(237, 20, 61)' color='primary' activeColor='rgb(237, 20, 61)' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='rgba(237, 20, 61, 1)' color='primary' activeColor='rgba(237, 20, 61, 1)' />
            <Button text='#ed143d' color='primary' activeColor='#ed143d' />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}