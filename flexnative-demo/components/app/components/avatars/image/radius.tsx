import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Radius'>
        <Avatar source={avatar} radius='none' />
        <Avatar source={avatar} radius='small' />
        <Avatar source={avatar} radius='medium' />
        <Avatar source={avatar} radius='large' />
        <Avatar source={avatar} radius='full' />
        <Avatar source={avatar} radius={15} />
      </DemoBlock>
    );
  }
}