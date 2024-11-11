import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <Avatar source={avatar} backgroundColor='crimson'/>
        <Avatar source={avatar} backgroundColor='#ed143d'/>
        <Avatar source={avatar} backgroundColor='rgb(237, 20, 61)'/>
        <Avatar source={avatar} backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}