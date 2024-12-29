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
      <DemoBlock title='Styling with StyleSheet'>
        <Block gap={DEMO_COMPONENT_GAP}>

        <Button text={{value: 'Text', style: styles.customBtnText}}
                iconLeft={{name: 'image', style: styles.customBtnLeftIcon}}
                iconRight={{name: 'star', style: styles.customBtnRightIcon}}
                style={styles.customBtn}
        />
          
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  customBtnText: {
    fontSize: 18,
    color: '#EF0003',
    fontFamily: 'Bold',
    alignSelf: 'center',
    paddingHorizontal: 25,
  },
  customBtnLeftIcon: {
    fontSize: 32,
    color: '#EF0003',
    height: 32,
    width: 32
  },
  customBtnRightIcon: {
    fontSize: 18,
    color: '#EF0003',
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 6
  },
  customBtn: {
    flex: 1,
    borderColor: '#EF0003',
    borderWidth: 5,
    paddingVertical: 16,
    backgroundColor: '#FFAE10'
  },
});