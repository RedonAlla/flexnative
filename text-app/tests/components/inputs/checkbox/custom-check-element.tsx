import React from "react";
import { Text, StyleSheet } from "react-native";

import { Check } from "../../../../packages/inputs/src";
import Example, { ExampleContainer } from "./example-container";


const items: Array<boolean> = [
  false
]

export default class extends Example {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <ExampleContainer title='Custom Check Element' shouldRender={Boolean(this.state.items.length > 0)}>
        <Check value={this.state.items![0]}
              onValueChange={() => this.handleChange(0)}
              label='Custom Check Element'
              checkElement={<CheckElement />}
              unCheckElement={<UncheckElement />}
        />
      </ExampleContainer>
    );
  }
}

function CheckElement() {
  return <Text style={styles.label}>😍</Text>;
}
function UncheckElement() {
  return <Text style={styles.label}>🤔</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 32
  },
});