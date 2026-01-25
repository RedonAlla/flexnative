import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Flex' style={{flex: 1}}>
        <Block row>
          <Block style={blockStyle('#16a085')}>
            <Text style={styles.text}>col 1</Text>
          </Block>
          
          <Block style={blockStyle('#FFC300')}>
            <Text style={styles.text}>col 2</Text>
          </Block>
        </Block>

        <Block>
          <Text style={styles.text}>row 1</Text>
          <Text style={styles.text}>row 1</Text>
        </Block>
        {/* <Block backgroundColor={'#16a085'} flex={0.5}><Text style={styles.text}>flex: 0.5</Text></Block>
        <Block backgroundColor={'#FFC300'} flex={2}><Text style={styles.text}>flex: 2</Text></Block>
        <Block backgroundColor={'#FF5733'} flex={1.5}><Text style={styles.text}>flex: 1.5</Text></Block> */}
      </DemoBlock>
    );
  }
}

const blockStyle = (backgroundColor: ColorValue) => {
  return {
    flex: 1,
    backgroundColor
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});