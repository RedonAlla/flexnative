import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Icon from "@flexnative/icons";
import Button from '@flexnative/buttons';

import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "../../constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Render Children'>
        <View style={styles.row}>
          <View style={styles.column}>
            <Button color='primary' text='Custom Loader'>
              <View style={styles.row}>
                <Icon name='star' size={22} />
                <Text style={styles.text}>Custom Children Render</Text>
              </View>
            </Button>
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