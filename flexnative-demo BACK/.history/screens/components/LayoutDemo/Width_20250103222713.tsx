import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='With'>
        <Block backgroundColor={'#16a085'} width={15}><Text style={styles.text}>width: 15</Text></Block>
        <Block backgroundColor={'#FFC300'} width={20}><Text style={styles.text}>width: 20</Text></Block>
        <Block backgroundColor={'#FF5733'} width={'20%'}><Text style={styles.text}>width: '20%'</Text></Block>
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