/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-12 23:40:39
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:24:55
 * @ Description: Examples of Check component with borders width.
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
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} type='outlined' borderWidth='none' label='none (default)' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} type='outlined' borderWidth='hairline' label='hairline' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} type='outlined' borderWidth='thin' label='thin' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} type='outlined' borderWidth='base' label='base' />
        <Check value={this.state.items![4]} onValueChange={() => this.handleChange(4)} type='outlined' borderWidth='thick' label='thick' />
        <Check value={this.state.items![5]} onValueChange={() => this.handleChange(5)} type='outlined' borderWidth={3} label='3' />
      </div>
    );
  }
}