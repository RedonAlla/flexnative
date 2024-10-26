import React from "react";
import Alert from "@/components/app/Alert";

import { Check, CheckList } from "@flexnative/inputs";
import { Block, ExampleContainer } from "../../check-boxes/example-container";

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

  public handleValueChange(selectedItems: string | Array<ItemProps>) {
    this.setState({valueObject: selectedItems as Array<ItemProps>});
  }

  public render() {
    return (
      <ExampleContainer title='Value Field' shouldRender={true}>
        
        <Block direction='row'>
          <CheckList material label='Value Field' valueField={'id'} value={this.state.valueObject} onValueChange={this.handleValueChange}>
            <Check value={{id: 1, color: 'primary'}} label='primary' />
            <Check value={{id: 2, color: 'secondary'}} label='secondary' />
            <Check value={{id: 3, color: 'info'}} label='info' />
          </CheckList>
        </Block>

        <Alert type="info" message="When the selected item is an object, always specify valueField.
   If you do not set a value for the field, the list will compare the items by reference, which may complicate debugging.
   For example, the selected value will not be applied, if it does not reference the exact passed data object."/>
        
      </ExampleContainer>
    );
  }
}