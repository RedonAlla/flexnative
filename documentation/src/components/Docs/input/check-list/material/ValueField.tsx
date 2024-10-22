import React from "react";
// highlight-next-line
import { Check, CheckList } from "@flexnative/inputs";


type ItemProps = { id: number, color: string; };

type StateType = {
  valueObject: Array<ItemProps>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      valueObject: [{id: 1, color: 'primary'}]
    }
    
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  public handleValueChange(selectedItems: Array<ItemProps>) {
    this.setState({valueObject: selectedItems});
  }

  public render() {
    return (
      <div className='example-block demo-column'>
        <CheckList material label='Value Field' valueField={'id'} value={this.state.valueObject} onValueChange={this.handleValueChange}>
          <Check value={{id: 1, color: 'primary'}} label='primary' />
          <Check value={{id: 2, color: 'secondary'}} label='secondary' />
          <Check value={{id: 3, color: 'info'}} label='info' />
        </CheckList>
      </div>
    );
  }
}