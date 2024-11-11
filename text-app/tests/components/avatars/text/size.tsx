import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Avatar text='R A' type='text' size='small' />
        <Avatar text='R A' type='text' size='medium' />
        <Avatar text='Redon Alla' type='text' size='large' />
        <Avatar text='Redon Alla' type='text' size={120} />
      </DemoBlock>
    );
  }
}