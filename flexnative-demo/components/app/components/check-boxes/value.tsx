import React from "react";
import Alert from "@/components/app/Alert";

import { Check } from "@flexnative/inputs";
import { Block, ExampleContainer } from "./example-container";

type ValueType = {
  id: number,
  color: string;
}

type StateType = {
  check1?: ValueType,
  check2?: ValueType,
  check3?: boolean,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      check1: undefined,
      check2: undefined,
      check3: undefined
    }
    
    this.handleChangeCheck1 = this.handleChangeCheck1.bind(this);
    this.handleChangeCheck2 = this.handleChangeCheck2.bind(this);
    this.handleChangeCheck3 = this.handleChangeCheck3.bind(this);
  }

  public handleChangeCheck1() {
    const val = this.state.check1;

    if(val)
      this.setState({check1: undefined});
    else
      this.setState({check1: {id: 1, color: 'red'}});
  }

  public handleChangeCheck2() {
    const val = this.state.check2;

    if(val)
      this.setState({check2: undefined});
    else
      this.setState({check2: {id: 2, color: 'blue'}});
  }

  public handleChangeCheck3() {
    const val = !this.state.check3;
    this.setState({check3: val});
  }

  public render() {
    return (
      <ExampleContainer title='Value' shouldRender={true}>
        <Block direction='row'>
          <Check value={this.state.check1} onValueChange={this.handleChangeCheck1} label='Color red' />
          <Alert type="note" message={JSON.stringify(this.state.check1)} />
        </Block>

        <Block direction='row'>
          <Check value={this.state.check2} onValueChange={this.handleChangeCheck2} label='Color blue' />
          <Alert type="note" message={JSON.stringify(this.state.check2)} />
        </Block>

        <Block direction='row'>
          <Check value={this.state.check3} onValueChange={this.handleChangeCheck3} label='Boolean' />
          <Alert type="note" message={JSON.stringify(this.state.check3)} />
        </Block>
      </ExampleContainer>
    );
  }
}