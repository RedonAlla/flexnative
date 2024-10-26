import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Avatar source={avatar} color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>
        <Avatar source={avatar} color='primary' borderWidth='thin' fillMode='ghost' borderColor='#ed143d'/>
        <Avatar source={avatar} color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgb(237, 20, 61)'/>
        <Avatar source={avatar} color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}