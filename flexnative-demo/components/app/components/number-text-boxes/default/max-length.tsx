import React from "react";

import { NumericTextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Max length'>
        <NumericTextBox placeholder='Max length' maxLength={15} />
      </DemoBlock>
    );
  }
}