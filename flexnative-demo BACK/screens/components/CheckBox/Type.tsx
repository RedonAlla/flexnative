/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-26 23:19:26
 * @ Description: This component demonstrates the usage of the `Check` component with different types.
 */


import React from "react";

import { Check } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import ExampleContainer from "./ExampleContainer";
import GhostTypeMessage from "@/components/common/Demo/GhostTypeMessage";


const items: Array<boolean> = [
  false,
  false,
  false,
  false,
];

/**
 * This component demonstrates the usage of the `Check` component with different types.
 * It extends the `ExampleContainer` class and initializes the state with an array of boolean values.
 * 
 * The `render` method returns a `DemoBlock` component with the title 'Border width'. Inside the `DemoBlock`,
 * a `Block` component is used to arrange the `Check` components in a row with a specified gap and margin.
 * 
 * Each `Check` component is rendered with different types:
 * - `outlined`
 * - `solid`
 * - `inverse`
 * - `ghost`
 * 
 * The `onValueChange` prop of each `Check` component is set to call the `handleChange` method with the respective index.
 * 
 * @component
 * @extends ExampleContainer
 * @example
 * <Types />
 */
export default class Types extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Types'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginVertical: DEMO_COMPONENT_GAP}}>
          
          <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} type='outlined' label='outlined' />
          <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} type='solid' label='solid' />
          <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} type='inverse' label='inverse' />
          <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} type='ghost' label='ghost' />
      
        </Block>

        <GhostTypeMessage />
      </DemoBlock>
    );
  }
}