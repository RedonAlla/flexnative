/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-23 23:54:45
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 00:36:25
 * @ Description: This component demonstrates the usage of different background colors for a CheckBox component.Each `Check` component is assigned a different background color using various color formats (named color, RGB, RGBA, and hex).
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
  false
]

/**
 * This component demonstrates the usage of different background colors for a CheckBox component.
 * 
 * @extends ExampleContainer
 * 
 * @component
 * @example
 * <BackgroundColor />
 * 
 * @description
 * The component sets the initial state with a list of items in `componentDidMount` and renders a `DemoBlock` containing multiple `Check` components.
 * Each `Check` component is assigned a different background color using various color formats (named color, RGB, RGBA, and hex).
 * 
 * @method componentDidMount
 * Sets the initial state with a list of items.
 * 
 * @method render
 * Renders the `DemoBlock` with `Check` components having different background colors.
 * 
 * @param {string} title - The title of the `DemoBlock`.
 * @param {number} gap - The gap between the `Check` components.
 * @param {boolean} value - The value of the `Check` component.
 * @param {function} onValueChange - The function to handle the value change of the `Check` component.
 * @param {string} backgroundColor - The background color of the `Check` component.
 * @param {string} label - The label of the `Check` component.
 */
export default class extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Background Color'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>

          <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} backgroundColor='crimson' label='crimson' />
          <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} backgroundColor='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
          <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} backgroundColor='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
          <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} backgroundColor='#ed143d' label='#ed143d' />
          
        </Block>
      </DemoBlock>
    );
  }
}