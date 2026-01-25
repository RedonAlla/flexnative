import React from "react";
import { Text } from "react-native";

import DemoBlock from "@/components/common/DemoBlock";
import Block from "@flexnative/layout/dist/block";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Flex'>
        <Block flex={1}><Text>flex: 1</Text></Block>
        <Block flex={2}><Text>flex: 2</Text></Block>
        <Block flex={1.5}><Text>flex: 1.5</Text></Block>
      </DemoBlock>
    );
  }
}