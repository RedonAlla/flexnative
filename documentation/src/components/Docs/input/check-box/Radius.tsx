/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-12 23:35:08
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-16 21:32:18
 * @ Description: Examples of Check component with border radius.
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
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} radius='none' label='none' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} radius='small' label='small' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} radius='medium' label='medium' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} radius='large' label='large' />
        <Check value={this.state.items![4]} onValueChange={() => this.handleChange(4)} radius='full' label='full' />
        <Check value={this.state.items![5]} onValueChange={() => this.handleChange(5)} radius={5} label='5' />
      </div>
    );
  }
}