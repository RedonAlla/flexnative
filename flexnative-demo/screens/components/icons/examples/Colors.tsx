/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 23:30:10
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-17 00:08:02
 * @ Description: Example use case of `Icon´ component with custom Color.
 */

import React from "react";

import Icon from "@flexnative/icons";
import Block from "@flexnative/layout/dist/block";
import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


const ICON_SIZE = 32;

export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row gap={DEMO_COMPONENT_GAP} justifyContent='space-between' alignItems='center' wrap="wrap">
          <Icon name='star' size={ICON_SIZE} color='default'/>
          <Icon name='star' size={ICON_SIZE} color='primary'/>
          <Icon name='star' size={ICON_SIZE} color='secondary'/>
          <Icon name='star' size={ICON_SIZE} color='info'/>
          <Icon name='star' size={ICON_SIZE} color='success'/>
          <Icon name='star' size={ICON_SIZE} color='warning'/>
          <Icon name='star' size={ICON_SIZE} color='error'/>
          <Icon name='star' size={ICON_SIZE} color='dark'/>
          <Icon name='star' size={ICON_SIZE} color='light'/>

          <Icon name='star' size={ICON_SIZE} color='red'/>
          <Icon name='star' size={ICON_SIZE} color='chartreuse'/>
          <Icon name='star' size={ICON_SIZE} color='#9400FF'/>
          <Icon name='star' size={ICON_SIZE} color='#FFC436'/>
          <Icon name='star' size={ICON_SIZE} color='rgb(0, 146, 255)'/>
          <Icon name='star' size={ICON_SIZE} color='rgb(26, 192, 198)'/>
        </Block>
      </DemoBlock>
    );
  }
}