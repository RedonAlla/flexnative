import React from "react";
import { ColorValue, StyleSheet, Text } from "react-native";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import Message from "@flexnative/messages";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Align'>
        <Message color='info' text="Same as 'alignItems'. Alternative optional property name for align items." />
      </DemoBlock>
    );
  }
}