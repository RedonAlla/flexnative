import React from "react";

import DemoBlock from "@/components/common/DemoBlock";
import Message from "@flexnative/messages";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Align'>
        <Message color='info' text="Same as 'alignItems'. Alternative optional property name for align items." />
      </DemoBlock>
    );
  }
}