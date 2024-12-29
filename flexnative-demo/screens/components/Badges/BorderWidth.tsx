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
      <DemoBlock title='Border Width'>
        <Block row gap={BADGES_GAP} wrap='wrap' style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Badge text='10' type='ghost' color='primary' borderWidth='none'>
            <Button text="none (default)"/>
          </Badge>
          <Badge text='10' type='ghost' color='primary' borderWidth='hairline'>
            <Button text="hairline"/>
          </Badge>
          <Badge text='10' type='text' color='primary' borderWidth='thin'>
            <Button text="thin"/>
          </Badge>
          <Badge text='10' type='text' color='primary' borderWidth='base'>
            <Button text="base"/>
          </Badge>
          <Badge text='10' type='text' color='primary' borderWidth='thick'>
            <Button text="thick"/>
          </Badge>
          <Badge text='10' type='text' color='primary' borderWidth={2}>
            <Button text="2"/>
          </Badge>
      
        </Block>
      </DemoBlock>
    );
  }
}