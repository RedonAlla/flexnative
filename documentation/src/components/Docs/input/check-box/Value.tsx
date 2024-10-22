/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-12 23:12:20
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:34:20
 * @ Description: Examples of Check component with different value types.
 */

import React from "react";

// highlight-next-line
import { Check } from '@flexnative/inputs';


type ValueType = {
  id: number,
  color: string;
}

type StateType = {
  check1?: ValueType,
  check2?: string,
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
      this.setState({check2: 'blue'});
  }

  public handleChangeCheck3() {
    const val = !this.state.check3;
    this.setState({check3: val});
  }

  public render() {
    return (
      <div className='example-block demo-column'>
        <div className='demo-row'>
          <Check value={this.state.check1} onValueChange={this.handleChangeCheck1} label='Object value' />
          <Check value={this.state.check2} onValueChange={this.handleChangeCheck2} label='String value' />
          <Check value={this.state.check3} onValueChange={this.handleChangeCheck3} label='Boolean value' />
        </div>

        <pre>
          <b>Object value: </b>{JSON.stringify(this.state.check1)}{'\n\n'}
          <b>String value: </b>{JSON.stringify(this.state.check2)}{'\n\n'}
          <b>Boolean value: </b>{JSON.stringify(this.state.check3)}
        </pre>
      </div>
    );
  }
}