import React from "react";
import { View, StyleSheet } from "react-native";

import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox placeholder='none' radius='none'/>
            <TextBox placeholder='medium' radius='medium'/>
            <TextBox placeholder='full radius' radius='full'/>
          </View>
          
          <View style={styles.column}>
            <TextBox placeholder='small' radius='small'/>
            <TextBox placeholder='large' radius='large' />
            <TextBox placeholder='12' radius={12} />
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
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  }
});