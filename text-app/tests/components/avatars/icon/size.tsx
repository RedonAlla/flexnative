import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Avatar icon='avatar' type='icon' size='small' />
        <Avatar icon='avatar' type='icon' size='medium' />
        <Avatar icon='avatar' type='icon' size='large' />
        <Avatar icon='avatar' type='icon' size={120} />
      </DemoBlock>
    );
  }
}