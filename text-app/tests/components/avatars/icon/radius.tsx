import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Radius'>
        <Avatar icon='avatar' type='icon' radius='none' />
        <Avatar icon='avatar' type='icon' radius='small' />
        <Avatar icon='avatar' type='icon' radius='medium' />
        <Avatar icon='avatar' type='icon' radius='large' />
        <Avatar icon='avatar' type='icon' radius='full' />
        <Avatar icon='avatar' type='icon' radius={15} />
      </DemoBlock>
    );
  }
}