import React from "react";

import DemoBlock from "@/components/common/DemoBlock";
import Message from "@flexnative/messages";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Justify'>
        <Message color='info' text="Same as 'justifyContent'. Alternative optional property name for justify content." />
      </DemoBlock>
    );
  }
}