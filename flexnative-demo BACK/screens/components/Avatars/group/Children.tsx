import React from "react";

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class Children extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Children'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
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
            <Avatar source={LOGO_PATH} color='primary' />
            <Avatar source={LOGO_PATH} color='primary' />
            <Avatar source={LOGO_PATH} color='primary' />
          </AvatarGroup>

          <AvatarGroup>
            <Avatar text='R A' type='text' color='primary' />
            <Avatar icon='avatar' type='icon' color='primary' />
            <Avatar source={LOGO_PATH} color='primary' />
          </AvatarGroup>
        </Block>
      </DemoBlock>
    );
  }
}