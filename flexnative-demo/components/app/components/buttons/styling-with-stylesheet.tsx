import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import DemoBlock from "@/components/app/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Styling with StyleSheet'>
        <Button text={{value: 'Text', style: styles.customBtnText}}
                iconLeft={{name: 'image', style: styles.customBtnLeftIcon}}
                iconRight={{name: 'star', style: styles.customBtnRightIcon}}
                style={styles.customBtn}
        />
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