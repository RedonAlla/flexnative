import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Helper text'>
        <NumericTextBox placeholder='input with helper text' helperText="Helper text" />
      </DemoBlock>
    );
  }
}