import React from "react";

import { Check } from "@flexnative/inputs";
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
      <ExampleContainer title='Border Width' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} type='outlined' borderWidth='none' label='none (default)' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} type='outlined' borderWidth='hairline' label='hairline' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} type='outlined' borderWidth='thin' label='thin' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} type='outlined' borderWidth='base' label='base' />
        <Check value={this.state.items![4]} onValueChange={() => this.handleChange(4)} type='outlined' borderWidth='thick' label='thick' />
        <Check value={this.state.items![5]} onValueChange={() => this.handleChange(5)} type='outlined' borderWidth={3} label='3' />
      </ExampleContainer>
    );
  }
}