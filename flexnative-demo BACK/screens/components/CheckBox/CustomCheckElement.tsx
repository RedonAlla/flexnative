/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 00:39:09
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-29 00:13:52
 * @ Description: This component demonstrates the usage of the `Check` component with a custom `Check` element.
 */


import React from "react";
import { Text, StyleSheet } from "react-native";

import { Check } from "@flexnative/inputs";

import DemoBlock from "@/components/common/DemoBlock";
import ExampleContainer from "./ExampleContainer";


const items: Array<boolean> = [
  false
];

/**
 * This component demonstrates the usage of the `Check` component with a custom `Check` element.
 * It extends the `ExampleContainer` class and initializes the state with an array of boolean values.
 * 
 * The `render` method returns a `DemoBlock` component with the title 'Custom Check Element'. Inside the `DemoBlock`,
 * a `Block` component is used to arrange the `Check` components in a row with a specified gap and margin.
 * 
 * 
 * The `onValueChange` prop of each `Check` component is set to call the `handleChange` method with the respective index.
 * 
 * @component
 * @extends ExampleContainer
 * @example
 * <CustomCheckElement />
 */
export default class CustomCheckElement extends ExampleContainer {
  componentDidMount() {
    this.setState({ items });
  }

  public render() {
    return (
      <DemoBlock title='Custom Check Element'>
        <Check value={this.state.items![0]}
              onValueChange={() => this.handleChange(0)}
              label='Custom Check Element'
              checkElement={<CheckElement />}
              unCheckElement={<UncheckElement />}
        />
      </DemoBlock>
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