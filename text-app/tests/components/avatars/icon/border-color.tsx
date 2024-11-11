import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Avatar icon='avatar' type='icon' color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>
        <Avatar icon='avatar' type='icon' color='primary' borderWidth='thin' fillMode='ghost' borderColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}