import React from "react";

import { Check } from "@flexnative/inputs";
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
      <ExampleContainer title='Type' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} type='outlined' label='outlined' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} type='solid' label='solid' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} type='inverse' label='inverse' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} type='ghost' label='ghost' />
      </ExampleContainer>
    );
  }
}