import React from "react";

import { Check, CheckList } from "@flexnative/inputs";
import { ExampleContainer } from "../../check-boxes/example-container";


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
      <ExampleContainer title='Type' shouldRender={true}>
        <CheckList material type="outlined" label="outlined" value={this.state.outlined} onValueChange={this.handleOutlinedChange}>
          <Check value='example1' label='Example 1' />
          <Check value='example2' label='Example 2' />
          <Check value='example3' label='Example 3' />
        </CheckList>

        <CheckList material type="underlined" label="underlined" value={this.state.underlined} onValueChange={this.handleUnderlinedChange}>
          <Check value='example1' label='Example 1' />
          <Check value='example2' label='Example 2' />
          <Check value='example3' label='Example 3' />
        </CheckList>
      </ExampleContainer>
    );
  }
}