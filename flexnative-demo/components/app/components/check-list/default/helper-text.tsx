import React from "react";

import { Check, CheckList } from "@flexnative/inputs";
import { ExampleContainer } from "../../check-boxes/example-container";


type StateType = {
  valueNumber: Array<number>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      valueNumber: [1, 3],
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(value: Array<number>) {
    this.setState({valueNumber: value as Array<number>});
  }

  public render() {
    return (
      <ExampleContainer title='Helper Text' shouldRender={true}>
        
        <CheckList helperText="Example with helper text" value={this.state.valueNumber} onValueChange={this.handleChange}>
          <Check value={1} label='Check 1' />
          <Check value={2} label='Check 2' />
          <Check value={3} label='Check 3' />
        </CheckList>
        
      </ExampleContainer>
    );
  }
}