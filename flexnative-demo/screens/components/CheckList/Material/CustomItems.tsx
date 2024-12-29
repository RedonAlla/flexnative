import React from "react";
import { Check, CheckList } from "@flexnative/inputs";
import Message from "@flexnative/messages";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type StateType = {
  values: Array<string>;
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      values: ['primary'],
    }
    
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  public handleValueChange(selectedItems: string | Array<string>) {
    this.setState({values: selectedItems as Array<string>});
  }

  public render() {
    return (
      <DemoBlock title='Custom Items'>
        <Block gap={DEMO_COMPONENT_GAP} >
          <CheckList material label='Label' value={this.state.values} onValueChange={this.handleValueChange}>
            <Check value='primary' size='small' color='primary' label='Check Box 1' />
            <Check value='info' color='info' label='Check Box 2' />
            <Check value='warning' size='medium' color='warning' label='Check Box 3' />
            <Check value='error' size='large' color='error' label='Check Box 4' />
          </CheckList>

          <Message color="info" text="Check inherits appearance from CheckList component but you can add different props in to different Check items to have different appearances."/>
        </Block>
      </DemoBlock>
    );
  }
}