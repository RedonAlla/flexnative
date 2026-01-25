import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Wrap'>
        <Block backgroundColor={'#16a085'} row wrap='nowrap' style={styles.block}>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          <Text style={styles.text}>nowrap</Text>
          </Block>
        <Block backgroundColor={'#FFC300'} row wrap='wrap' style={styles.block}>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
          <Text style={styles.text}>wrap</Text>
        </Block>
        <Block backgroundColor={'#FF5733'} row wrap='wrap-reverse' style={styles.block}>
          <Text style={styles.text}>wrap-reverse: 1</Text>
          <Text style={styles.text}>wrap-reverse: 2</Text>
          <Text style={styles.text}>wrap-reverse: 3</Text>
          <Text style={styles.text}>wrap-reverse: 4</Text>
          <Text style={styles.text}>wrap-reverse: 5</Text>
          <Text style={styles.text}>wrap-reverse: 6</Text>
          <Text style={styles.text}>wrap-reverse: 7</Text>
          <Text style={styles.text}>wrap-reverse: 8</Text>
          <Text style={styles.text}>wrap-reverse: 9</Text>
          <Text style={styles.text}>wrap-reverse: 10</Text>
          <Text style={styles.text}>wrap-reverse: 11</Text>
          <Text style={styles.text}>wrap-reverse: 12</Text>
          <Text style={styles.text}>wrap-reverse: 13</Text>
          <Text style={styles.text}>wrap-reverse: 14</Text>
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    padding: DEMO_COMPONENT_GAP
  },
  text: {
    padding: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff'
  }
});