import React from "react";
import { StyleSheet } from "react-native";
import { Check, CheckList } from "@flexnative/inputs";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


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
      <DemoBlock title='Label Style'>
        <CheckList label='Custom Label Style'
                  labelStyle={styles.label}
                  value={this.state.testValues}
                  onValueChange={this.handleValuesChange}>
          <Check value='1' label='Check 1' />
          <Check value='2' label='Check 2' />
          <Check value='3' label='Check 3' />
        </CheckList>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson',
    columnGap: DEMO_COMPONENT_GAP,
  }
});