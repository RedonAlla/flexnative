/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-25 20:02:32
 * @ Description: This component demonstrates the usage of the `Check` component with different value types.
 */


import React from "react";

import { Check } from "@flexnative/inputs";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import ExampleContainer from "./ExampleContainer";
import Message from "@flexnative/messages";


type ValueType = {
  id: number,
  color: string;
}

type StateType = {
  check1?: ValueType,
  check2?: ValueType,
  check3?: boolean,
}

/**
 * This component demonstrates the usage of the `Check` component with different value types.
 * It extends the `ExampleContainer` class and initializes the state with an array of boolean values.
 * 
 * The `render` method returns a `DemoBlock` component with the title 'Border width'. Inside the `DemoBlock`,
 * a `Block` component is used to arrange the `Check` components in a row with a specified gap and margin.
 * 
 * Each `Check` component is rendered with different value types:
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
 * <Value />
 */
export default class Value extends React.Component<{}, StateType>  {
  constructor(props: {}) {
    super(props);

    this.state = {
      check1: undefined,
      check2: undefined,
      check3: undefined
    }
    
    this.handleChangeCheck1 = this.handleChangeCheck1.bind(this);
    this.handleChangeCheck2 = this.handleChangeCheck2.bind(this);
    this.handleChangeCheck3 = this.handleChangeCheck3.bind(this);
  }

  public handleChangeCheck1() {
    const val = this.state.check1;

    if(val)
      this.setState({check1: undefined});
    else
      this.setState({check1: {id: 1, color: 'red'}});
  }

  public handleChangeCheck2() {
    const val = this.state.check2;

    if(val)
      this.setState({check2: undefined});
    else
      this.setState({check2: {id: 2, color: 'blue'}});
  }

  public handleChangeCheck3() {
    const val = !this.state.check3;
    this.setState({check3: val});
  }

  public render() {
    return (
      <DemoBlock title='Value'>
        <Block row gap={DEMO_COMPONENT_GAP * 3} wrap="wrap" style={{marginTop: DEMO_COMPONENT_GAP}}>
          
          <Block gap={DEMO_COMPONENT_GAP}>
            <Check value={this.state.check1} onValueChange={this.handleChangeCheck1} label='Color red' />
            <Message text={JSON.stringify(this.state.check1, null, 4)} />
          </Block>

          <Block gap={DEMO_COMPONENT_GAP}>
            <Check value={this.state.check2} onValueChange={this.handleChangeCheck2} label='Color blue' />
            <Message text={JSON.stringify(this.state.check2, null, 4)} />
          </Block>

          <Block gap={DEMO_COMPONENT_GAP}>
            <Check value={this.state.check3} onValueChange={this.handleChangeCheck3} label='Boolean' />
            <Message text={JSON.stringify(this.state.check3, null, 4)} />
          </Block>

        </Block>
      </DemoBlock>
    );
  }
}