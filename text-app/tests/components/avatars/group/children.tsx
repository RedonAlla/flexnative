import React from "react";

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { avatar } from "../avatar";
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Children'>
        <AvatarGroup>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup>
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
        </AvatarGroup>

        <AvatarGroup>
          <Avatar source={avatar} color='primary' />
          <Avatar source={avatar} color='primary' />
          <Avatar source={avatar} color='primary' />
        </AvatarGroup>

        <AvatarGroup>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar icon='avatar' type='icon' color='primary' />
          <Avatar source={avatar} color='primary' />
        </AvatarGroup>
      </DemoBlock>
    );
  }
}