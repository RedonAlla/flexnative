import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='none'/>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='hairline'/>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='thin'/>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='base'/>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth='thick'/>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' borderWidth={2}/>
      </DemoBlock>
    );
  }
}