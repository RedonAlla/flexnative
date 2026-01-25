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
      <DemoBlock title='Position'>
        <Block row gap={BADGES_GAP} wrap='wrap' style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Badge text='10' position='top-left'>
            <Button text="top-left"/>
          </Badge>
          <Badge text='10' position='top-right'>
            <Button text="top-right (default)"/>
          </Badge>
          <Badge text='10' position='bottom-left'>
            <Button text="bottom-left"/>
          </Badge>
          <Badge text='10' position='bottom-right'>
            <Button text="bottom-right"/>
          </Badge>
          <Badge text='10' position={{ top: 5, bottom: 8, right: -25 }}>
            <Button text="{ top: 5, bottom: 8, right: -25 }"/>
          </Badge>
      
        </Block>
      </DemoBlock>
    );
  }
}