import React from "react";

import DemoBlock from "@/components/common/DemoBlock";
import Message from "@flexnative/messages";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Content'>
        <Message color='info' text="Same as 'alignContent'. Alternative optional property name for align content." />
      </DemoBlock>
    );
  }
}