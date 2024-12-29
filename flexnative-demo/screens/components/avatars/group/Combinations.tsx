import React from "react";
import { StyleSheet } from 'react-native';

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { Block } from "@flexnative/layout";

import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import DemoBlock from "@/components/common/DemoBlock";
import { LOGO_PATH } from "../constants";


export default class Combinations extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Combinations'>
        <Block row flex={1} gap={DEMO_COMPONENT_GAP} wrap='wrap'>
          <AvatarGroup style={styles.combinations}>
            <Avatar text='RA' size='large' type='text' color='primary' />
            <Avatar icon='avatar' size='large' type='icon' color='success' />
            <Avatar source={LOGO_PATH} size='large' color='info' />
          </AvatarGroup>
        </Block>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  combinations: {
    padding: 8,
    borderRadius: 99,
    backgroundColor: '#ed143d30'
  }
});