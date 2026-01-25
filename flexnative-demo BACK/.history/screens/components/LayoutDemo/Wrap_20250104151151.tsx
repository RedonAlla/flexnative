import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Wrap' style={styles.container}>
        <Block backgroundColor={'#16a085'} wrap='nowrap'>
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
        <Block backgroundColor={'#FFC300'} wrap='wrap'>
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
          <Text style={styles.text}>wrap</Text>
        </Block>
        <Block backgroundColor={'#FF5733'} wrap='wrap-reverse'>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
          <Text style={styles.text}>wrap-reverse</Text>
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250
  },
  text: {
    padding: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff'
  }
});