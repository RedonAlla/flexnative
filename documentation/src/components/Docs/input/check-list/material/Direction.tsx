import React from "react";
// highlight-next-line
import { Check, CheckList } from "@flexnative/inputs";


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

  public handleRowChange(value: Array<number>) {
    this.setState({rowValues: value as Array<number>});
  }

  public handleColumnChange(value: Array<number>) {
    this.setState({columnValues: value as Array<number>});
  }

  public render() {
    return (
      <div className='example-block demo-column'>
         <CheckList material label='Direction Row' direction="row" value={this.state.rowValues} onValueChange={this.handleRowChange}>
          <Check value={1} label='Row 1' />
          <Check value={2} label='Row 2' />
          <Check value={3} label='Row 3' />
        </CheckList>

        <CheckList material label='Direction Column' direction="column" value={this.state.columnValues} onValueChange={this.handleColumnChange}>
          <Check value={1} label='Column 1' />
          <Check value={2} label='Column 2' />
          <Check value={3} label='Column 3' />
        </CheckList>
      </div>
    );
  }
}