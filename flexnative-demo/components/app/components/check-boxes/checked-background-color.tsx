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
      <ExampleContainer title='Checked Background Color' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} checkedBackgroundColor='crimson' label='crimson' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} checkedBackgroundColor='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} checkedBackgroundColor='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} checkedBackgroundColor='#ed143d' label='#ed143d' />
      </ExampleContainer>
    );
  }
}