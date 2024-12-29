import React from "react";
import { View } from "react-native";

import Tag from '@flexnative/tags';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Sizes'>
        <Block row gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          
          <View>
            <Tag size='small' text='small' />
          </View>
          <View>
            <Tag text='default' />
          </View>
          <View>
            <Tag size='medium' text='medium' />
          </View>
          <View>
            <Tag size='large'text='large' />
          </View>
      
        </Block>
      </DemoBlock>
    );
  }
}