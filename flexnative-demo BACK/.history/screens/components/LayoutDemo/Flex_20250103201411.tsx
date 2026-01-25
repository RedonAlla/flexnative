import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Flex'>
        <Block backgroundColor={'#16a085'} flex={0.5}><Text style={styles.text}>flex: 0.5</Text></Block>
        <Block backgroundColor={'#FFC300'} flex={2}><Text style={styles.text}>flex: 2</Text></Block>
        <Block backgroundColor={'#FF5733'} flex={1.5}><Text style={styles.text}>flex: 1.5</Text></Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#fff'
  }
});