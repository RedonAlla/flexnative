import React from "react";

import DemoBlock from "@/components/common/DemoBlock";
import Message from "@flexnative/messages";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Justify'>
        <Message color='info' text="A short version for `justifyContent` style property. Same as `justifyContent` property." />
      </DemoBlock>
    );
  }
}