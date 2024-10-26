import React from "react";
import { StyleSheet } from 'react-native';

import Avatar, { AvatarGroup } from '@flexnative/avatar';
import DemoBlock from "@/components/app/DemoBlock";
import { avatar } from "../avatar";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Combinations'>
        <AvatarGroup style={styles.combinations}>
          <Avatar text='RA' size='large' type='text' color='primary' />
          <Avatar icon='avatar' size='large' type='icon' color='success' />
          <Avatar source={avatar} size='large' color='info' />
        </AvatarGroup>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  combinations: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 21,
    borderRadius: 99,
    backgroundColor: '#ed143d30'
  }
});