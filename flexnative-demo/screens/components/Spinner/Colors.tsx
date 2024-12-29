import React from "react";
import { Spinner } from "@flexnative/icons";
import DemoBlock from "@/components/common/DemoBlock";
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";


const ICON_SIZE = 32;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Colors'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <Spinner name='spinner' size={ICON_SIZE} color='default'/>
          <Spinner name='spinner' size={ICON_SIZE} color='primary'/>
          <Spinner name='spinner' size={ICON_SIZE} color='secondary'/>
          <Spinner name='spinner' size={ICON_SIZE} color='info'/>
          <Spinner name='spinner' size={ICON_SIZE} color='success'/>
          <Spinner name='spinner' size={ICON_SIZE} color='warning'/>
          <Spinner name='spinner' size={ICON_SIZE} color='error'/>
          <Spinner name='spinner' size={ICON_SIZE} color='dark'/>
          <Spinner name='spinner' size={ICON_SIZE} color='light'/>

          <Spinner name='spinner' size={ICON_SIZE} color='red'/>
          <Spinner name='spinner' size={ICON_SIZE} color='chartreuse'/>
          <Spinner name='spinner' size={ICON_SIZE} color='#9400FF'/>
          <Spinner name='spinner' size={ICON_SIZE} color='#FFC436'/>
          <Spinner name='spinner' size={ICON_SIZE} color='rgb(0, 146, 255)'/>
          <Spinner name='spinner' size={ICON_SIZE} color='rgb(26, 192, 198)'/>
        </Block>  
      </DemoBlock>
    );
  }
}