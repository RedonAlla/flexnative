import React from "react";

import Avatar from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class BorderColor extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Avatar icon='avatar' type='icon' color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>
          <Avatar icon='avatar' type='icon' color='primary' borderWidth='thin' fillMode='ghost' borderColor='#ed143d'/>
          <Avatar icon='avatar' type='icon' color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgb(237, 20, 61)'/>
        </Block>
      </DemoBlock>
    );
  }
}