/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-25 20:02:19
 * @ Description: This component demonstrates the usage of CheckBox component using as a RadioButton.
 */


import React from "react";

import { Check } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import Message from "@flexnative/messages";


type ValueType = {
  id: number,
  color: string;
}

type StateType = {
  value?: ValueType
}

/**
 * This class extends `ExampleContainer` and represents a component that renders a demo block with checkboxes.
 * 
 * @class
 * @extends ExampleContainer
 * 
 * @method componentDidMount
 * This lifecycle method is called after the component is mounted. It sets the initial state with items.
 * 
 * @method render
 * This method renders the component.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default class extends React.Component<any, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: { id: 1, color: 'red'}
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(value?: ValueType) {
    this.setState({value});
  }

  public render() {
    return (
      <DemoBlock title='Radio'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginVertical: DEMO_COMPONENT_GAP}}>

          <Check value={this.state.value?.id === 1} onValueChange={() => this.handleChange({id: 1, color: 'red'})} label='Color red' />
          <Check value={this.state.value?.id === 2} onValueChange={() => this.handleChange({id: 2, color: 'blue'})} label='Color blue' />
          <Check value={this.state.value?.id === 3} onValueChange={() => this.handleChange({id: 3, color: 'green'})} label='Color green' />
        
        </Block>
        <Message text={JSON.stringify(this.state.value, null, 4)} />
      </DemoBlock>
    );
  }
}