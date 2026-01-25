import React from "react";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='none' color='primary' radius='none'/>
            <Button text='medium' color='primary' radius='medium'/>
            <Button text='full radius' color='primary' radius='full'/>
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Button text='small' color='primary' radius='small'/>
            <Button text='large' color='primary' radius='large' />
            <Button text='12' color='primary' radius={12} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}