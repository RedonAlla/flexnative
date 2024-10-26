import React from "react";
import Alert from "@/components/app/Alert";

import { Check } from "@flexnative/inputs";
import { Block, ExampleContainer } from "./example-container";

type ValueType = {
  id: number,
  color: string;
}

type StateType = {
  value?: ValueType
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: { id: 1, color: 'red'}
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(value?: ValueType) {
    this.setState({value});
  }

  public render() {
    return (
      <ExampleContainer title='Using as Radio Button' shouldRender={true}>
        <Block direction='row'>
          <Check value={this.state.value?.id === 1} onValueChange={() => this.handleChange({id: 1, color: 'red'})} label='Color red' />
          <Check value={this.state.value?.id === 2} onValueChange={() => this.handleChange({id: 2, color: 'blue'})} label='Color blue' />
          <Check value={this.state.value?.id === 3} onValueChange={() => this.handleChange({id: 3, color: 'green'})} label='Color green' />
        </Block>
        
        <Alert message={JSON.stringify(this.state.value)} type="note"/>
      </ExampleContainer>
    );
  }
}