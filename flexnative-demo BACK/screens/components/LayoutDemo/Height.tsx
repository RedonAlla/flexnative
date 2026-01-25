import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Height' style={styles.container}>
        <Block backgroundColor={'#16a085'} height={30}><Text style={styles.text}>height: 30</Text></Block>
        <Block backgroundColor={'#FFC300'} height={50}><Text style={styles.text}>height: 50</Text></Block>
        <Block backgroundColor={'#FF5733'} height={'50%'}><Text style={styles.text}>height: '50%'</Text></Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250
  },
  text: {
    color: '#fff'
  }
});