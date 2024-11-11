import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color'>
        <Avatar text='R A' type='text' backgroundColor='crimson'/>
        <Avatar text='R A' type='text' backgroundColor='#ed143d'/>
        <Avatar text='R A' type='text' backgroundColor='rgb(237, 20, 61)'/>
        <Avatar text='R A' type='text' backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}