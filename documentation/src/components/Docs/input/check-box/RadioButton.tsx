/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-13 00:20:21
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:30:10
 * @ Description: Examples of Check component used as Radio Button.
 */

import React from "react";

// highlight-next-line
import { Check } from '@flexnative/inputs';


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
      <div className='example-block demo-column'>
        <div className='demo-row'>
          <Check value={this.state.value?.id === 1} onValueChange={() => this.handleChange({id: 1, color: 'red'})} label='Color red' />
          <Check value={this.state.value?.id === 2} onValueChange={() => this.handleChange({id: 2, color: 'blue'})} label='Color blue' />
          <Check value={this.state.value?.id === 3} onValueChange={() => this.handleChange({id: 3, color: 'green'})} label='Color green' />
        </div>

        <pre>
          {JSON.stringify(this.state.value)}
        </pre>
      </div>
    );
  }
}