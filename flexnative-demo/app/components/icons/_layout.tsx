/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-15 21:38:50
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-19 19:12:11
 * @ Description: Layout for icons demo screens.
 */

import React from 'react';
import { Tabs } from 'expo-router';

import { icons } from '@flexnative/icons';
import TabLayout, { TabBarIcon } from '@/screens/components/layout/TabLayout';


export default class extends React.PureComponent {
  public render() {
    return(
      <TabLayout initialRouteName='list'>
        <Tabs.Screen
          name="list"
          options={{
            tabBarLabel: 'List',
            tabBarBadge: Object.keys(icons).length,
            tabBarIcon: (props) => <TabBarIcon icon='grid' {...props} />
          }}
        />
        <Tabs.Screen
          name="examples"
          options={{
            tabBarLabel: 'Examples',
            tabBarIcon: (props) => <TabBarIcon icon='bookmark' {...props} />
          }}
        />
      </TabLayout>
    );
  }
}