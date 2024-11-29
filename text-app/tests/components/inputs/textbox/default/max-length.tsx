import React from "react";

import { TextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Max length'>
        <TextBox placeholder='Max length' maxLength={15} />
      </DemoBlock>
    );
  }
}