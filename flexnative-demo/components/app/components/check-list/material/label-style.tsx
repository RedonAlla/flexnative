import React from "react";
import { StyleSheet } from "react-native";


import { Check, CheckList } from "@flexnative/inputs";
import { ExampleContainer } from "../../check-boxes/example-container";
import { GAP } from "@/components/app/constants";


type StateType = {
  testValues: Array<string>;
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      testValues: ['1']
    }
    
    this.handleValuesChange = this.handleValuesChange.bind(this);
  }

  public handleValuesChange(selectedItem: Array<string>) {
    this.setState({testValues: selectedItem});
  }

  public render() {
    return (
      <ExampleContainer title='Label Style' shouldRender={true}>
        
        <CheckList material
                  label='Custom Label Style'
                  labelStyle={styles.label}
                  value={this.state.testValues}
                  onValueChange={this.handleValuesChange}>
          <Check value='1' label='Check 1' />
          <Check value='2' label='Check 2' />
          <Check value='3' label='Check 3' />
        </CheckList>
        
      </ExampleContainer>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson',
    columnGap: GAP,
  }
});