/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-29 00:20:02
 * @ Description: This component demonstrates the usage of the `Check` component with different border colors.
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
];

/**
 * This component demonstrates the usage of the `Check` component with different border colors.
 * It extends the `ExampleContainer` class and initializes the state with an array of boolean values.
 * 
 * The `render` method returns a `DemoBlock` component with the title 'Border Color'. Inside the `DemoBlock`,
 * a `Block` component is used to arrange the `Check` components in a row with a specified gap and margin.
 * 
 * Each `Check` component is rendered with different border colors:
 * - `crimson`
 * - `rgb(237, 20, 61)`
 * - `rgba(237, 20, 61, 0.5)`
 * - `#ed143d`
 * 
 * The `onValueChange` prop of each `Check` component is set to call the `handleChange` method with the respective index.
 * 
 * @component
 * @extends ExampleContainer
 * @example
 * <BorderColor />
 */
export default class extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Border Color'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>

          <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} type='outlined' borderColor='crimson' label='crimson' />
          <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} type='outlined' borderColor='rgb(237, 20, 61)' label='rgb(237, 20, 61)' />
          <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} type='outlined' borderColor='rgba(237, 20, 61, 0.5)' label='rgba(237, 20, 61, 0.5)' />
          <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} type='outlined' borderColor='#ed143d' label='#ed143d' />
          
        </Block>
      </DemoBlock>
    );
  }
}