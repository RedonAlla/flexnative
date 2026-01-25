import React from "react";
import { Block } from "@flexnative/layout";
import { Check, CheckList } from "@flexnative/inputs";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type StateProp = {
  outlined: Array<string>;
  underlined: Array<string>;
}

export default class extends React.Component<{}, StateProp> {
  constructor(props: {}) {
    super(props);

    this.state = {
      outlined: ['example1'],
      underlined: ['example1']
    }
    
    this.handleOutlinedChange = this.handleOutlinedChange.bind(this);
    this.handleUnderlinedChange = this.handleUnderlinedChange.bind(this);
  }

  public handleOutlinedChange(selectedItems: string | Array<string>) {
    this.setState({outlined: selectedItems as Array<string>});
  }

  public handleUnderlinedChange(selectedItems: string | Array<string>) {
    this.setState({underlined: selectedItems as Array<string>});
  }

  public render() {
    return (
      <DemoBlock title='Type'>
        <Block row gap={DEMO_COMPONENT_GAP}>
          <CheckList type="outlined" value={this.state.outlined} onValueChange={this.handleOutlinedChange}>
            <Check value='example1' label='Example 1' />
            <Check value='example2' label='Example 2' />
            <Check value='example3' label='Example 3' />
          </CheckList>

          <CheckList type="underlined" value={this.state.underlined} onValueChange={this.handleUnderlinedChange}>
            <Check value='example1' label='Example 1' />
            <Check value='example2' label='Example 2' />
            <Check value='example3' label='Example 3' />
          </CheckList>
        </Block>
      </DemoBlock>
    );
  }
}