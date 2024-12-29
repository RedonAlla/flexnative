/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-23 23:54:45
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 18:25:22
 * @ Description: This component demonstrates the usage of different colors for a CheckBox component.Each `Check` component is assigned a different color using various color formats (named color, RGB, RGBA, and hex).
 */

import React from "react";

import { Check } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import ExampleContainer from "./ExampleContainer";


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
]

/**
 * This component demonstrates the usage of different colors for a CheckBox component.
 * 
 * @extends ExampleContainer
 * 
 * @component
 * @example
 * <Colors />
 * 
 * @description
 * The component sets the initial state with a list of items in `componentDidMount` and renders a `DemoBlock` containing multiple `Check` components.
 * Each `Check` component is assigned a different color using various color formats (named color, RGB, RGBA, and hex).
 * 
 * @method componentDidMount
 * Sets the initial state with a list of items.
 * 
 * @method render
 * Renders the `DemoBlock` with `Check` components having different colors.
 * 
 * @param {string} title - The title of the `DemoBlock`.
 * @param {number} gap - The gap between the `Check` components.
 * @param {boolean} value - The value of the `Check` component.
 * @param {function} onValueChange - The function to handle the value change of the `Check` component.
 * @param {string} backgroundColor - The color of the `Check` component.
 * @param {string} label - The label of the `Check` component.
 */
export default class Colors extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Color'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>
          
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
      
        </Block>
      </DemoBlock>
    );
  }
}