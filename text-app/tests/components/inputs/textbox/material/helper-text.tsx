import React from "react";

import DemoBlock from "../../../../../components/icons/DemoBlock";
import { TextBox } from "../../../../../packages/inputs/src";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Helper text'>
        <TextBox material label='Helper text' placeholder='input with helper text' helperText="Helper text" />
      </DemoBlock>
    );
  }
}