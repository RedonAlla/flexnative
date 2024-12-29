import React from "react";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { BADGES_GAP } from "./constants";
import GhostTypeMessage from "@/components/common/Demo/GhostTypeMessage";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Types'>
        <Block row gap={BADGES_GAP} wrap='wrap' style={{marginVertical: DEMO_COMPONENT_GAP}}>
          
          <Badge text='10' color='primary'>
            <Button text="default"/>
          </Badge>
          <Badge text='10' type='ghost' color='primary'>
            <Button text="ghost"/>
          </Badge>
          <Badge text='10' type='text' color='primary'>
            <Button text="text"/>
          </Badge>
      
        </Block>

        <GhostTypeMessage />
      </DemoBlock>
    );
  }
}