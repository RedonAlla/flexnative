import React from "react";
import { View, StyleSheet } from "react-native";

import { Check, CheckList } from "@flexnative/inputs";
import { Block, ExampleContainer } from "../../check-boxes/example-container";
import { GAP } from "@/components/app/constants";


type StateType = {
  rowValues: Array<number>;
  columnValues: Array<number>;
}

export default class extends React.Component<{}, StateType> {
  constructor(props: {}) {
    super(props);

    this.state = {
      columnValues: [1, 3],
      rowValues: [1, 3],
    }
    
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
  }

  public handleRowChange(value: Array<number>) {
    this.setState({rowValues: value as Array<number>});
  }

  public handleColumnChange(value: Array<number>) {
    this.setState({columnValues: value as Array<number>});
  }

  public render() {
    return (
      <ExampleContainer title='Direction' shouldRender={true}>
        <View style={styles.block}>
          
          <CheckList direction="row" value={this.state.rowValues} onValueChange={this.handleRowChange}>
            <Check value={1} label='Row 1' />
            <Check value={2} label='Row 2' />
            <Check value={3} label='Row 3' />
          </CheckList>

          <CheckList direction="column" value={this.state.columnValues} onValueChange={this.handleColumnChange}>
            <Check value={1} label='Column 1' />
            <Check value={2} label='Column 2' />
            <Check value={3} label='Column 3' />
          </CheckList>

        </View>
      </ExampleContainer>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: GAP,
    width: '100%',
    height: 'auto',
    display: 'flex',
    backgroundColor: 'transparent',
  }
});