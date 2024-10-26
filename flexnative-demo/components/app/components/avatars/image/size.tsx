import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Avatar source={avatar} size='small' />
        <Avatar source={avatar} size='medium' />
        <Avatar source={avatar} size='large' />
        <Avatar source={avatar} size={120} />
      </DemoBlock>
    );
  }
}