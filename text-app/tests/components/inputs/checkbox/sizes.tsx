import React from "react";

import { Check } from "../../../../packages/inputs/src";
import Example, { ExampleContainer } from "./example-container";


const items: Array<boolean> = [
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
      <ExampleContainer title='Sizes' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} size='small' label='small' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} size='default' label='solid' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} size='medium' label='medium' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} size='large' label='large' />
      </ExampleContainer>
    );
  }
}