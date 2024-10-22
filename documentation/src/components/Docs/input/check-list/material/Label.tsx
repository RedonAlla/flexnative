import React from "react";
import { Alert, Platform, StyleSheet, Text } from "react-native";
import Icon from "@flexnative/icons";
// highlight-next-line
import { Check, CheckList } from "@flexnative/inputs";


type StateType = {
  textValues: Array<string>;
  customValues: Array<string>;
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      textValues: ['1'],
      customValues: ['1']
    }
    
    this.handleTextValues = this.handleTextValues.bind(this);
    this.handleCustomValues = this.handleCustomValues.bind(this);
  }

  public handleTextValues(selectedItem: Array<string>) {
    this.setState({textValues: selectedItem});
  }

  public handleCustomValues(selectedItems: Array<string>) {
    this.setState({customValues: selectedItems});
  }

  public render() {
    return (
      <div className='example-div demo-row'>
        <CheckList material label='Label as text' value={this.state.textValues} onValueChange={this.handleTextValues}>
          <Check value='1' label='Check 1' />
          <Check value='2' label='Check 2' />
          <Check value='3' label='Check 3' />
        </CheckList>

        <CheckList material label={<Label />} value={this.state.customValues} onValueChange={this.handleCustomValues}>
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