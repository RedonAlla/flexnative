import React from "react";
import { Button, StyleSheet } from "react-native";;
import Badge from '@flexnative/badges';

import { GAP } from "../../../constants/sizes";
import DemoBlock from "../../../components/icons/DemoBlock";;

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Sizes' contentStyle={styles.block}>
        <Badge text="10" size="small">
          <Button title="small"/>
        </Badge>
        <Badge text='10' size="medium">
          <Button title="medium"/>
        </Badge>
        <Badge text='10' size="large">
          <Button title="large"/>
        </Badge>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: GAP,
    columnGap: GAP,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  view: {
    backgroundColor: 'transparent',
  }
});