import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='none (default)' color='primary' type='text' borderWidth='none' />
            <Button text='hairline' color='primary' type='text' borderWidth='hairline' />
            <Button text='thin' color='primary' type='text' borderWidth='thin' />
            <Button text='3' color='primary' type='text' borderWidth={3}/>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='thin' color='primary' type='text' borderWidth='thin' />
            <Button text='base' color='primary' type='text' borderWidth='base' />
            <Button text='thick' color='primary' type='text' borderWidth='thick' />
            <Button text='5' color='primary' type='text' borderWidth={5} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}