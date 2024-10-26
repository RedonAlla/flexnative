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
  false,
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
      <ExampleContainer title='Colors' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} color='default' label='default' />
        <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} color='primary' label='primary' />
        <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} color='secondary' label='secondary' />
        <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} color='light' label='light' />
        <Check value={this.state.items![4]} onValueChange={() => this.handleChange(4)} color='dark' label='dark' />
        <Check value={this.state.items![5]} onValueChange={() => this.handleChange(5)} color='info' label='info' />
        <Check value={this.state.items![6]} onValueChange={() => this.handleChange(6)} color='success' label='success' />
        <Check value={this.state.items![7]} onValueChange={() => this.handleChange(7)} color='warning' label='warning' />
        <Check value={this.state.items![8]} onValueChange={() => this.handleChange(8)} color='error' label='error'/>
        <Check value={this.state.items![9]} onValueChange={() => this.handleChange(9)} color='crimson' label='crimson' />
        <Check value={this.state.items![10]} onValueChange={() => this.handleChange(10)} color='#ed143d' label='#ed143d'/>
        <Check value={this.state.items![11]} onValueChange={() => this.handleChange(11)} color='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
        <Check value={this.state.items![12]} onValueChange={() => this.handleChange(12)} color='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
      </ExampleContainer>
    );
  }
}