import React from "react";
import { StyleSheet, Text } from "react-native";

import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Gap'>
        <Block row gap={DEMO_COMPONENT_GAP * 1.5}>
          <Block gap={DEMO_COMPONENT_GAP} backgroundColor={'#FFC300'} flex={1}>
            <Text style={styles.text}>Row 1 : Clo 1. flex: 1</Text>
          </Block>
          <Block gap={DEMO_COMPONENT_GAP} backgroundColor={'#FF5733'} flex={2}>
            <Text style={styles.text}>Row 1 : Clo 2. flex: 2</Text>
          </Block>
        </Block>

        <Block gap={DEMO_COMPONENT_GAP * 1.5}>
          <Block gap={DEMO_COMPONENT_GAP} backgroundColor={'#C70039'} flex={1}>
            <Text style={styles.text}>Row 2 : Clo 1. flex: 1</Text>
          </Block>
          <Block gap={DEMO_COMPONENT_GAP} backgroundColor={'#9b59b6'} flex={2}>
            <Text style={styles.text}>Row 2 : Clo 2. flex: 2</Text>
          </Block>
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#fff',
    padding: 20
  }
});