import React from "react";
import { Block } from "@flexnative/layout";
import Message from "@flexnative/messages";
import { Check, CheckList } from "@flexnative/inputs";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type ItemProps = { id: number, color: string; };

type StateType = {
  valueNumber: Array<number>,
  valueString: Array<string>,
  valueObject: Array<ItemProps>,
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      valueNumber: [1],
      valueString: ['primary'],
      valueObject: [{id: 1, color: 'primary'}]
    }
    
    this.handleValueNumberChange = this.handleValueNumberChange.bind(this);
    this.handleValueStringChange = this.handleValueStringChange.bind(this);
    this.handleValueObjectChange = this.handleValueObjectChange.bind(this);
  }

  public handleValueNumberChange(value: number | Array<number>) {
    this.setState({valueNumber: value as Array<number>});
  }

  public handleValueStringChange(selectedItems: string | Array<string>) {
    this.setState({valueString: selectedItems as Array<string>});
  }

  public handleValueObjectChange(selectedItems: ItemProps | Array<ItemProps>) {
    this.setState({valueObject: selectedItems as Array<ItemProps>});
  }

  public render() {
    return (
      <DemoBlock title='Value'>
        <Block gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 2}}>
          <CheckList material label='Label' valueField={'id'} value={this.state.valueObject} onValueChange={this.handleValueObjectChange}>
            <Check value={{id: 1, color: 'primary'}} label='primary' />
            <Check value={{id: 2, color: 'secondary'}} label='secondary' />
            <Check value={{id: 3, color: 'info'}} label='info' />
          </CheckList>

          <Message text={JSON.stringify(this.state.valueObject, null, 4)} />
        </Block>

        <Block gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 2}}>
          <CheckList material label='Label' value={this.state.valueString} onValueChange={this.handleValueStringChange}>
            <Check value='primary' label='primary' />
            <Check value='secondary' label='secondary' />
            <Check value='info' label='info' />
          </CheckList>

          <Message text={JSON.stringify(this.state.valueString, null, 4)} />
        </Block>

        <Block gap={DEMO_COMPONENT_GAP}>
          <CheckList material label='Label' value={this.state.valueNumber} onValueChange={this.handleValueNumberChange}>
            <Check value={1} label='1' />
            <Check value={2} label='2' />
            <Check value={3} label='3' />
          </CheckList>

          <Message text={JSON.stringify(this.state.valueNumber, null, 4)} />
        </Block>
      </DemoBlock>
    );
  }
}