import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Padding'>
        <Block backgroundColor='#16a085' padding={5}>
          <Text style={styles.text}>padding: 5</Text>
        </Block>
        <Block backgroundColor='#FFC300' padding={5}>
          <Text style={styles.text}>padding: 5</Text>
        </Block>
        <Block backgroundColor='#FF5733' padding={15}>
          <Text style={styles.text}>padding: 15</Text>
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});