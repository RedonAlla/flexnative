import React from "react";
import { View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';

import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <View style={styles.row}>
          <View style={styles.column}>
            <Button text='none' color='primary' radius='none'/>
            <Button text='medium' color='primary' radius='medium'/>
            <Button text='full radius' color='primary' radius='full'/>
          </View>
          <View style={styles.column}>
            <Button text='small' color='primary' radius='small'/>
            <Button text='large' color='primary' radius='large' />
            <Button text='12' color='primary' radius={12} />
          </View>
        </View>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    columnGap: GAP,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: GAP,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});