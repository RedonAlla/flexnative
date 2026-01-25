import React from "react";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { BADGES_GAP } from "./constants";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row gap={BADGES_GAP} wrap='wrap' style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Badge text='10' type='text' color='primary' borderColor='crimson' borderWidth='hairline'>
            <Button text="crimson"/>
          </Badge>
          <Badge text='10' type='text' color='primary' borderColor='#ed143d' borderWidth='hairline'>
            <Button text="#ed143d"/>
          </Badge>
          <Badge text='10' type='text' color='primary' borderColor='rgb(237, 20, 61)' borderWidth='hairline'>
            <Button text="rgb(237, 20, 61)"/>
          </Badge>
          <Badge text='10' type='text' color='primary' borderColor='rgba(237, 20, 61, 0.5)' borderWidth='hairline'>
            <Button text="rgba(237, 20, 61, 0.5)"/>
          </Badge>
      
        </Block>
      </DemoBlock>
    );
  }
}