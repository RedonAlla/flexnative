import React from "react";
// highlight-next-line
import { Check, CheckList } from "@flexnative/inputs";


type StateType = {
  values: Array<string>;
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      values: ['primary'],
    }
    
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  public handleValueChange(selectedItems: string | Array<string>) {
    this.setState({values: selectedItems as Array<string>});
  }

  public render() {
    return (
      <div className='example-block'>
        <CheckList material label='Custom Check boxes' value={this.state.values} onValueChange={this.handleValueChange}>
          <Check value='primary' size='small' color='primary' label='Check Box 1' />
          <Check value='info' size='default' color='info' label='Check Box 2' />
          <Check value='warning' size='medium' color='warning' label='Check Box 3' />
          <Check value='error' size='large' color='error' label='Check Box 4' />
        </CheckList>
      </div>
    );
  }
}