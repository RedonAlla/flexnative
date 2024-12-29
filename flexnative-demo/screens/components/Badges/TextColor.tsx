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
      <DemoBlock title='Text Color'>
        <Block row gap={BADGES_GAP} wrap='wrap' style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Badge text='10' textColor='crimson'>
            <Button text="crimson"/>
          </Badge>
          <Badge text='10' textColor='#ed143d'>
            <Button text="#ed143d"/>
          </Badge>
          <Badge text='10' textColor='rgb(237, 20, 61)'>
            <Button text="rgb(237, 20, 61)"/>
          </Badge>
          <Badge text='10' textColor='rgba(237, 20, 61, 0.5)'>
            <Button text="rgba(237, 20, 61, 0.5)"/>
          </Badge>
      
        </Block>
      </DemoBlock>
    );
  }
}