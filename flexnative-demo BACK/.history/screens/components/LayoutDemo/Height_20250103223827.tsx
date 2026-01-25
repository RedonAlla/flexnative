import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Height'>
        <Block backgroundColor={'#16a085'} height={15}><Text style={styles.text}>height: 15</Text></Block>
        <Block backgroundColor={'#FFC300'} height={20}><Text style={styles.text}>height: 20</Text></Block>
        <Block backgroundColor={'#FF5733'} height={'15%'}><Text style={styles.text}>height: '15%'</Text></Block>
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