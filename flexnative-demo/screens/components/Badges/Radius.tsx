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
      <DemoBlock title='Radius'>
        <Block row gap={BADGES_GAP} wrap='wrap' style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Badge text='10' color='primary' radius='none' >
            <Button text="none"/>
          </Badge>
          <Badge text='10' color='primary' radius='small' >
            <Button text="small"/>
          </Badge>
          <Badge text='10' color='primary' radius='medium' >
            <Button text="medium (default)"/>
          </Badge>
          <Badge text='10' color='primary' radius='large' >
            <Button text="large"/>
          </Badge>
          <Badge text='10' color='primary' radius='full' >
            <Button text="full"/>
          </Badge>
          <Badge text='10' color='primary' radius={5} >
            <Button text="5"/>
          </Badge>
      
        </Block>
      </DemoBlock>
    );
  }
}