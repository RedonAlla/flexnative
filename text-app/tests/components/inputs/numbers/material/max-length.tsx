import React from "react";

import { NumericTextBox } from "../../../../../packages/inputs/src";
import DemoBlock from "../../../../../components/icons/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Max length'>
        <NumericTextBox material label='Max length' placeholder='Max length' maxLength={15} />
      </DemoBlock>
    );
  }
}