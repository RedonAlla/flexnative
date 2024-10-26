import React from "react";
import { Text, StyleSheet, View } from "react-native";

import Tag from '@flexnative/tags';
import Icon from "@flexnative/icons";
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Render Children' contentStyle={styles.block}>
        <Tag color='primary' text='Custom Loader'>
            <View style={styles.row}>
              <Icon name='star' size={22} />
              <Text style={styles.text}>Custom Children Render</Text>
            </View>
          </Tag>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: 10,
    columnGap: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 12,
    fontFamily: 'Bold',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  }
});