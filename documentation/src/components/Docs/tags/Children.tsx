/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-17 23:17:52
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-18 22:03:44
 * @ Description: Examples of Tag component with custom element.
 */

import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import Icon from "@flexnative/icons";
// highlight-next-line
import Tag from '@flexnative/tags';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <div className='example-block'>
        <Tag color='primary' text='Custom Loader'>
            <View style={styles.row}>
              <Icon name='star' size={22} />
              <Text style={styles.text}>Custom Children Render</Text>
            </View>
          </Tag>
      </div>
    );
  }
}


const styles = StyleSheet.create({
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