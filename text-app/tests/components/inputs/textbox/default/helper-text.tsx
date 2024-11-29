import React from "react";

import { TextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Helper text'>
        <TextBox placeholder='input with helper text' helperText="Helper text" />
      </DemoBlock>
    );
  }
}