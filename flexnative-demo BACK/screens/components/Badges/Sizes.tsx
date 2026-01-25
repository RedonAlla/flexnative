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
      <DemoBlock title='Sizes'>
        <Block row gap={BADGES_GAP} wrap='wrap' style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Badge color='primary' text="10" size="small">
            <Button text="small"/>
          </Badge>
          <Badge color='primary' text='10'>
            <Button text="default"/>
          </Badge>
          <Badge color='primary' text='10' size="medium">
            <Button text="medium"/>
          </Badge>
          <Badge color='primary' text='10' size="large">
            <Button size='large' text="large"/>
          </Badge>
      
        </Block>
      </DemoBlock>
    );
  }
}