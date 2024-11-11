import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Fill Mode'>
        <Avatar source={avatar} color='primary' fillMode='solid' />
        <Avatar source={avatar} color='primary' fillMode='none' />
        <Avatar source={avatar} color='primary' fillMode='ghost' />
      </DemoBlock>
    );
  }
}