import React from "react";

import { Check } from "../../../../packages/inputs/src";
import Example, { ExampleContainer } from "./example-container";


const items: Array<boolean> = [
  false,
  false,
  false,
  false,
  false,
  false,
];

export default class extends Example {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <ExampleContainer title='Radius' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} radius='none' label='none' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} radius='small' label='small' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} radius='medium' label='medium' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} radius='large' label='large' />
        <Check value={this.state.items![4]} onValueChange={() => this.handleChange(4)} radius='full' label='full' />
        <Check value={this.state.items![5]} onValueChange={() => this.handleChange(5)} radius={5} label='5' />
      </ExampleContainer>
    );
  }
}