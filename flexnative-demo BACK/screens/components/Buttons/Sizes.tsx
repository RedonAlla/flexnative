import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='small' color='primary' size='small' />
            <Button text='large' color='primary' size='large' />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='medium' color='primary' size='medium' />
            <Button text='25' color='primary' size={25}/>
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}