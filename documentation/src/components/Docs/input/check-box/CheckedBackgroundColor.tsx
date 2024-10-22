/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-13 00:03:57
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:25:42
 * @ Description: Examples of Check component with background color when it is in check state.
 */

import React from "react";
import ExampleContainer from "./ExampleContainer";

// highlight-next-line
import { Check } from '@flexnative/inputs';


const items: Array<boolean> = [
  false,
  false,
  false,
  false
];

export default class extends ExampleContainer {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: items
    }
  }

  public render() {
    return (
      <div className='example-block'>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} checkedBackgroundColor='crimson' label='crimson' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} checkedBackgroundColor='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} checkedBackgroundColor='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} checkedBackgroundColor='#ed143d' label='#ed143d' />
      </div>
    );
  }
}