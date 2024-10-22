import React from "react";
// highlight-next-line
import { Check, CheckList } from "@flexnative/inputs";


type ItemProps = { id: number, color: string; };

type StateType = {
  valueNumber: Array<number>,
  valueString: Array<string>,
  valueObject: Array<ItemProps>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      valueNumber: [1],
      valueString: ['primary'],
      valueObject: [{id: 1, color: 'primary'}]
    }
    
    this.handleValueNumberChange = this.handleValueNumberChange.bind(this);
    this.handleValueStringChange = this.handleValueStringChange.bind(this);
    this.handleValueObjectChange = this.handleValueObjectChange.bind(this);
  }

  public handleValueNumberChange(value: Array<number>) {
    this.setState({valueNumber: value as Array<number>});
  }

  public handleValueStringChange(selectedItems: Array<string>) {
    this.setState({valueString: selectedItems});
  }

  public handleValueObjectChange(selectedItems: Array<ItemProps>) {
    this.setState({valueObject: selectedItems});
  }

  public render() {
    return (
      <div className='example-block demo-column'>
        <CheckList material label='Value' valueField={'id'} value={this.state.valueObject} onValueChange={this.handleValueObjectChange}>
          <Check value={{id: 1, color: 'primary'}} label='primary' />
          <Check value={{id: 2, color: 'secondary'}} label='secondary' />
          <Check value={{id: 3, color: 'info'}} label='info' />
        </CheckList>

        <pre>
          {JSON.stringify(this.state.valueObject,null,2)}
        </pre>

        <CheckList material label='Value field'  value={this.state.valueString} onValueChange={this.handleValueStringChange}>
          <Check value='primary' label='primary' />
          <Check value='secondary' label='secondary' />
          <Check value='info' label='info' />
        </CheckList>

        <pre>
          {JSON.stringify(this.state.valueString,null,2)}
        </pre>
        
        <CheckList material label='Value field' value={this.state.valueNumber} onValueChange={this.handleValueNumberChange}>
          <Check value={1} label='1' />
          <Check value={2} label='2' />
          <Check value={3} label='3' />
        </CheckList>

        <pre>
          {JSON.stringify(this.state.valueNumber,null,2)}
        </pre>
      </div>
    );
  }
}