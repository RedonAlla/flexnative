import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='none'/>
        <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='hairline'/>
        <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='thin'/>
        <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='base'/>
        <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth='thick'/>
        <Avatar text='R A' type='text' color='primary' fillMode='none' borderWidth={2}/>
      </DemoBlock>
    );
  }
}