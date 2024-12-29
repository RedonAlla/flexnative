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
          <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='none'/>
          <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='hairline'/>
          <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='thin'/>
          <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='base'/>
          <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='thick'/>
          <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth={2}/>
        </Block>
      </DemoBlock>
    );
  }
}