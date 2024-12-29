/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 19:25:25
 * @ Description: This component demonstrates the usage of the `Check` component with different border radius.
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
];

/**
 * This component demonstrates the usage of the `Check` component with different border radius.
 * It extends the `ExampleContainer` class and initializes the state with an array of boolean values.
 * 
 * The `render` method returns a `DemoBlock` component with the title 'Border width'. Inside the `DemoBlock`,
 * a `Block` component is used to arrange the `Check` components in a row with a specified gap and margin.
 * 
 * Each `Check` component is rendered with different border radius:
 * - `none`
 * - `small`
 * - `medium`
 * - `large`
 * - `full`
 * - `5`
 * 
 * The `onValueChange` prop of each `Check` component is set to call the `handleChange` method with the respective index.
 * 
 * @component
 * @extends ExampleContainer
 * @example
 * <Radius />
 */
export default class Radius extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Radius'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>

          <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} radius='none' label='none' />
          <Check value={this.state.items![1]} onValueChange={() => this.handleChange(1)} radius='small' label='small' />
          <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} radius='medium' label='medium' />
          <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} radius='large' label='large' />
          <Check value={this.state.items![4]} onValueChange={() => this.handleChange(4)} radius='full' label='full' />
          <Check value={this.state.items![5]} onValueChange={() => this.handleChange(5)} radius={5} label='5' />
      
        </Block>
      </DemoBlock>
    );
  }
}