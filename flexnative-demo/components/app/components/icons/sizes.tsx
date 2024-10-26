import React from "react";

import Icon from "@flexnative/icons";
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Icon name='star' />
        <Icon name='star' size={16} />
        <Icon name='star' size={18} />
        <Icon name='star' size={24} />
        <Icon name='star' size={32} />
        <Icon name='star' size={64} />
      </DemoBlock>
    );
  }
}