import React from 'react';
import { Tabs } from 'expo-router';

import { icons } from '@flexnative/icons';

import TabLayout, { TabBarIcon } from '@/components/app/components/layout/tab-layout';


export default class extends React.PureComponent<{}, {}> {
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