/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 19:32:33
 * @ Description: This component demonstrates the usage of the `Check` component with different sizes.
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
];

/**
 * This component demonstrates the usage of the `Check` component with different sizes.
 * It extends the `ExampleContainer` class and initializes the state with an array of boolean values.
 * 
 * The `render` method returns a `DemoBlock` component with the title 'Border width'. Inside the `DemoBlock`,
 * a `Block` component is used to arrange the `Check` components in a row with a specified gap and margin.
 * 
 * Each `Check` component is rendered with different sizes:
 * - `small`
 * - `medium`
 * - `large`
 * - `25`
 * 
 * The `onValueChange` prop of each `Check` component is set to call the `handleChange` method with the respective index.
 * 
 * @component
 * @extends ExampleContainer
 * @example
 * <Sizes />
 */
export default class Sizes extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Check value={this.state.items![0]} onValueChange={() => this.handleChange(0)} size='small' label='small' />
          <Check value={this.state.items![2]} onValueChange={() => this.handleChange(2)} size='medium' label='medium' />
          <Check value={this.state.items![3]} onValueChange={() => this.handleChange(3)} size='large' label='large' />
          <Check value={this.state.items![4]} onValueChange={() => this.handleChange(4)} size={25} label='25' />
      
        </Block>
      </DemoBlock>
    );
  }
}