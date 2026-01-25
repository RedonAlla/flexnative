import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import Message from "@flexnative/messages";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Justify'>
        <Message color='info' text="Same as 'justifyContent'. Alternative optional property name for justify content." />
      </DemoBlock>
    );
  }
}

const blockStyle = (backgroundColor: ColorValue) => {
  return {
    padding: DEMO_COMPONENT_GAP,
    height: 80,
    backgroundColor
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
});