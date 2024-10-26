import React from "react";

import Icon from "@flexnative/icons";
import DemoBlock from "@/components/app/DemoBlock";


const ICON_SIZE = 32;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Colors'>
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
      </DemoBlock>
    );
  }
}