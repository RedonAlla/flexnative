import React from "react";
import { Block } from "@flexnative/layout";
import Message from "@flexnative/messages";
import { Check, CheckList } from "@flexnative/inputs";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type ItemProps = { id: number, color: string; };

type StateType = {
  valueObject: Array<ItemProps>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      valueObject: [{id: 1, color: 'primary'}]
    }
    
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  public handleValueChange(selectedItems: ItemProps | Array<ItemProps>) {
    this.setState({valueObject: selectedItems as Array<ItemProps>});
  }

  public render() {
    return (
      <DemoBlock title='Value Field'>
        <Block gap={DEMO_COMPONENT_GAP}>
          <CheckList valueField={'id'} value={this.state.valueObject} onValueChange={this.handleValueChange}>
            <Check value={{id: 1, color: 'primary'}} label='primary' />
            <Check value={{id: 2, color: 'secondary'}} label='secondary' />
            <Check value={{id: 3, color: 'info'}} label='info' />
          </CheckList>

          <Message color="info" text="When the selected item is an object, always specify valueField.
   If you do not set a value for the field, the list will compare the items by reference, which may complicate debugging.
   For example, the selected value will not be applied, if it does not reference the exact passed data object."/>
        </Block>
      </DemoBlock>
    );
  }
}