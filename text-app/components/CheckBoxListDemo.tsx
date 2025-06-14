import React from "react";
import { CheckList } from "../packages/inputs/src";
import CheckBox from '../packages/inputs/src/check-box';


type ItemProps = { id: number, color: string; };

type StateType = {
  valueObject: Array<ItemProps>,
}

const options: Array<ItemProps> = [
  {id: 10, color: 'Options 1'},
  {id: 20, color: 'Options 2'},
  {id: 30, color: 'Options 3'}
];


export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      valueObject: [{id: 1, color: 'primary'}]
    }
    
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  public handleValueChange(selectedItems: Array<ItemProps>) {
    this.setState({valueObject: selectedItems});
  }

  public render() {
    console.log('values: ', this.state.valueObject);
    return (
        <CheckList
          label='Value Field' direction="row" size='large' valueField={'id'} textField="color"
          options={options}
          multipleSelect={true}
          value={this.state.valueObject}
          look="inline"
          helperText="Select multiple options"
        >
        </CheckList>
    );
  }
}