/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-10-10 00:03:26
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 09:30:04
 * @ Description: Examples of AvatarGroup component with different Avatar Components type.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
// highlight-start
import Avatar, { AvatarGroup } from '@flexnative/avatar';
import { LOGO } from '../../../../constants';
// highlight-end


export default class extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className='example-block'>
        <AvatarGroup style={styles.combinations}>
          <Avatar text='RA' size='large' type='text' color='primary' />
          <Avatar icon='avatar' size='large' type='icon' color='success' />
          <Avatar source={LOGO} size='large' color='info' />
        </AvatarGroup>
      </div>
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