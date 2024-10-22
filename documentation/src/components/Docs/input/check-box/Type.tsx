/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-12 23:27:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:33:40
 * @ Description: Examples of Check component with different types.
 */

import React from "react";
import ExampleContainer from "./ExampleContainer";

// highlight-next-line
import { Check } from '@flexnative/inputs';


const items: Array<boolean> = [
  false,
  false,
  false,
  false,
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
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} type='outlined' label='outlined' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} type='solid' label='solid' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} type='inverse' label='inverse' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} type='ghost' label='ghost' />
      </div>
    );
  }
}