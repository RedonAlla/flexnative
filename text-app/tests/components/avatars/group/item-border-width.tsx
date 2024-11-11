import React from "react";

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Item Border Width'>
        <AvatarGroup itemBorderWidth='none'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderWidth='hairline'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderWidth='thin'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderWidth='base'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderWidth='thick'>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>

        <AvatarGroup itemBorderWidth={2}>
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
          <Avatar text='R A' type='text' color='primary' />
        </AvatarGroup>
      </DemoBlock>
    );
  }
}