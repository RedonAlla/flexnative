import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Fill Mode'>
        <Avatar icon='avatar' type='icon' color='primary' fillMode='solid' />
        <Avatar icon='avatar' type='icon' color='primary' fillMode='none' />
        <Avatar icon='avatar' type='icon' color='primary' fillMode='ghost' />
      </DemoBlock>
    );
  }
}