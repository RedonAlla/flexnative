import React from "react";
import { Alert, Platform, StyleSheet, Text } from "react-native";
import Icon from "@flexnative/icons";
// highlight-next-line
import { Check, CheckList } from "@flexnative/inputs";


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
      <div className='example-div'>
        <CheckList material label='Custom Label Style'
                  labelStyle={styles.label}
                  value={this.state.testValues}
                  onValueChange={this.handleValuesChange}>
          <Check value='1' label='Check 1' />
          <Check value='2' label='Check 2' />
          <Check value='3' label='Check 3' />
        </CheckList>
      </div>
    );
  }
}

function Label() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as label')
      : Alert.alert('Alert Title', 'Custom Element as label', [
          {text: 'OK'},
        ]);
    
  return (
    <Text style={styles.label}>
      <Icon name="avatar" color='crimson' onPress={openAlert} /> Custom Element
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson',
    columnGap: 26,
  }
});