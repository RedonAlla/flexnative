import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';

import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Text' contentStyle={styles.content}>
        <Button text='default' color='primary' />
        <Button color='primary' text={{value: 'Custom colors', color: '#072541', activeColor: '#FFCD4B'}} />
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    rowGap: GAP
  }
});