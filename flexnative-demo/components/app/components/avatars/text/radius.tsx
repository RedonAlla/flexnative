import React from "react";

import Avatar from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Radius'>
        <Avatar text='R A' type='text' radius='none' />
        <Avatar text='R A' type='text' radius='small' />
        <Avatar text='R A' type='text' radius='medium' />
        <Avatar text='R A' type='text' radius='large' />
        <Avatar text='R A' type='text' radius='full' />
        <Avatar text='R A' type='text' radius={15} />
      </DemoBlock>
    );
  }
}