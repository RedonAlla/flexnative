import React from "react";

import { Check, CheckList } from "@flexnative/inputs";
import Alert from "@/components/app/Alert";
import { Block, ExampleContainer } from "../../check-boxes/example-container";


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
      <ExampleContainer title='Value' shouldRender={true}>
        <Block direction='row'>
          <CheckList valueField={'id'} value={this.state.valueObject} onValueChange={this.handleValueObjectChange}>
            <Check value={{id: 1, color: 'primary'}} label='primary' />
            <Check value={{id: 2, color: 'secondary'}} label='secondary' />
            <Check value={{id: 3, color: 'info'}} label='info' />
          </CheckList>

          <Alert type='note' message={JSON.stringify(this.state.valueObject,null,2)} />
        </Block>

        <Block direction='row'>
          <CheckList value={this.state.valueString} onValueChange={this.handleValueStringChange}>
            <Check value='primary' label='primary' />
            <Check value='secondary' label='secondary' />
            <Check value='info' label='info' />
          </CheckList>

          <Alert type='note' message={JSON.stringify(this.state.valueString)} />
        </Block>

        <Block direction='row'>
          <CheckList value={this.state.valueNumber} onValueChange={this.handleValueNumberChange}>
            <Check value={1} label='1' />
            <Check value={2} label='2' />
            <Check value={3} label='3' />
          </CheckList>

          <Alert type='note' message={JSON.stringify(this.state.valueNumber)} />
        </Block>
      </ExampleContainer>
    );
  }
}