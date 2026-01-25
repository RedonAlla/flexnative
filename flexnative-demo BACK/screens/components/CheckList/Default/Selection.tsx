import React from "react";
import { Block } from "@flexnative/layout";
import Message from "@flexnative/messages";
import { Check, CheckList } from "@flexnative/inputs";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


type ItemProps = { id: number, color: string; };

type StateType = {
  singleSelect: ItemProps,
  multipleSelect: Array<ItemProps>;
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      singleSelect: {id: 1, color: 'primary'},
      multipleSelect: [{id: 1, color: 'primary'}]
    }
    
    this.handleSingleSelect = this.handleSingleSelect.bind(this);
    this.handleMultipleSelect = this.handleMultipleSelect.bind(this);
  }

  public handleSingleSelect(selectedItem: ItemProps) {
    this.setState({singleSelect: selectedItem});
  }

  public handleMultipleSelect(selectedItems: Array<ItemProps>) {
    this.setState({multipleSelect: selectedItems});
  }

  public render() {
    return (
      <DemoBlock title='Selection'>
        <Block gap={DEMO_COMPONENT_GAP} style={{marginBottom: DEMO_COMPONENT_GAP * 2}}>
          <CheckList multipleSelect={true} label='Multi Select (default)' valueField={'id'} value={this.state.multipleSelect} onValueChange={this.handleMultipleSelect}>
            <Check value={{id: 1, color: 'primary'}} label='primary' />
            <Check value={{id: 2, color: 'secondary'}} label='secondary' />
            <Check value={{id: 3, color: 'info'}} label='info' />
          </CheckList>

          <Message text={JSON.stringify(this.state.multipleSelect, null, 4)} />
        </Block>

         <Block gap={DEMO_COMPONENT_GAP}>
          <CheckList multipleSelect={false} label='Single Select' valueField={'id'} value={this.state.singleSelect} onValueChange={this.handleSingleSelect}>
            <Check value={{id: 1, color: 'primary'}} label='primary' />
            <Check value={{id: 2, color: 'secondary'}} label='secondary' />
            <Check value={{id: 3, color: 'info'}} label='info' />
          </CheckList>

          <Message text={JSON.stringify(this.state.singleSelect, null, 4)} />
        </Block>
      </DemoBlock>
    );
  }
}