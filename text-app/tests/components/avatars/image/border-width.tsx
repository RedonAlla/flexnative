import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Avatar source={avatar} color='primary' fillMode='none' borderWidth='none'/>
        <Avatar source={avatar} color='primary' fillMode='none' borderWidth='hairline'/>
        <Avatar source={avatar} color='primary' fillMode='none' borderWidth='thin'/>
        <Avatar source={avatar} color='primary' fillMode='none' borderWidth='base'/>
        <Avatar source={avatar} color='primary' fillMode='none' borderWidth='thick'/>
        <Avatar source={avatar} color='primary' fillMode='none' borderWidth={2}/>
      </DemoBlock>
    );
  }
}