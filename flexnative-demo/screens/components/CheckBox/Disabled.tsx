/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-23 23:54:45
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 18:55:50
 * @ Description: This component demonstrates the usage of CheckBox component in disabled state.
 */

import React from "react";

import { Check } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import ExampleContainer from "./ExampleContainer";


/**
 * This component demonstrates the usage of CheckBox component in disabled state.
 * 
 * @extends ExampleContainer
 * 
 * @component
 * @example
 * <Disabled />
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
export default class Disabled extends ExampleContainer {
  public render() {
    return (
      <DemoBlock title='Disabled'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>

          <Check value={true} type='outlined' label='outlined' disabled />
          <Check value={false} type='outlined' label='outlined' disabled />
          
          <Check value={true} type='solid' label='solid' disabled />
          <Check value={false} type='solid' label='solid' disabled />

          <Check value={true} type='inverse' label='inverse' disabled />
          <Check value={false} type='inverse' label='inverse' disabled />

        </Block>
      </DemoBlock>
    );
  }
}