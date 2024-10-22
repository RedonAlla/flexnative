import React from "react";
// highlight-next-line
import { Check, CheckList } from "@flexnative/inputs";


type StateProp = {
  outlined: Array<string>;
  underlined: Array<string>;
}

export default class extends React.Component<{}, StateProp> {
  constructor(props: {}) {
    super(props);

    this.state = {
      outlined: ['example1'],
      underlined: ['example1']
    }
    
    this.handleOutlinedChange = this.handleOutlinedChange.bind(this);
    this.handleUnderlinedChange = this.handleUnderlinedChange.bind(this);
  }

  public handleOutlinedChange(selectedItems: Array<string>) {
    this.setState({outlined: selectedItems});
  }

  public handleUnderlinedChange(selectedItems: Array<string>) {
    this.setState({underlined: selectedItems});
  }

  public render() {
    return (
      <div className='example-block'>
        <CheckList type="outlined" value={this.state.outlined} onValueChange={this.handleOutlinedChange}>
          <Check value='example1' label='Example 1' />
          <Check value='example2' label='Example 2' />
          <Check value='example3' label='Example 3' />
        </CheckList>

        <CheckList type="underlined" value={this.state.underlined} onValueChange={this.handleUnderlinedChange}>
          <Check value='example1' label='Example 1' />
          <Check value='example2' label='Example 2' />
          <Check value='example3' label='Example 3' />
        </CheckList>
      </div>
    );
  }
}