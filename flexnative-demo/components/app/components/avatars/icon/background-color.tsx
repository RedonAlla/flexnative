import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <Avatar icon='avatar' type='icon' backgroundColor='crimson'/>
        <Avatar icon='avatar' type='icon' backgroundColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' backgroundColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}