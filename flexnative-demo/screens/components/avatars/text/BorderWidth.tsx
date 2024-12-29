import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class BorderWidth extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='none'/>
          <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='hairline'/>
          <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='thin'/>
          <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='base'/>
          <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='thick'/>
          <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth={2}/>
        </Block>
      </DemoBlock>
    );
  }
}