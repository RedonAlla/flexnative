import React from "react";
import { Check, CheckList } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";



type StateType = {
  rowValues: Array<number>;
  columnValues: Array<number>;
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      columnValues: [1, 3],
      rowValues: [1, 3],
    }
    
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
  }

  public handleRowChange(value: number | Array<number>) {
    this.setState({rowValues: value as Array<number>});
  }

  public handleColumnChange(value: number | Array<number>) {
    this.setState({columnValues: value as Array<number>});
  }

  public render() {
    return (
      <DemoBlock title='Direction'>
        <Block gap={DEMO_COMPONENT_GAP} >
          <CheckList material label='Label' direction="row" value={this.state.rowValues} onValueChange={this.handleRowChange} >
            <Check value={1} label='Row 1' />
            <Check value={2} label='Row 2' />
            <Check value={3} label='Row 3' />
          </CheckList>

          <CheckList material label='Label' direction="column" value={this.state.columnValues} onValueChange={this.handleColumnChange}>
            <Check value={1} label='Column 1' />
            <Check value={2} label='Column 2' />
            <Check value={3} label='Column 3' />
          </CheckList>
        </Block>
      </DemoBlock>
    );
  }
}