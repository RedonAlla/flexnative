import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Avatar text='R A' type='text' color='primary' borderWidth='thin' fillMode='ghost' borderColor='crimson'/>
        <Avatar text='R A' type='text' color='primary' borderWidth='thin' fillMode='ghost' borderColor='#ed143d'/>
        <Avatar text='R A' type='text' color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgb(237, 20, 61)'/>
        <Avatar text='R A' type='text' color='primary' borderWidth='thin' fillMode='ghost' borderColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}