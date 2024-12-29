import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import Icon from "@flexnative/icons";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Render Children'>
        <Block gap={DEMO_COMPONENT_GAP}>

          <Button color='primary' text='Custom Loader'>
            <View style={styles.row}>
              <Icon name='star' size={22} />
              <Text style={styles.text}>Custom Children Render</Text>
            </View>
          </Button>
          
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    columnGap: DEMO_COMPONENT_GAP,
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