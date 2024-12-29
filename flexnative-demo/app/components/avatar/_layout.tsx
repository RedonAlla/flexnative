import React from 'react';
import { Tabs } from 'expo-router';

import TabLayout, { TabBarIcon } from '@/screens/components/layout/TabLayout';


export default class extends React.PureComponent {
  public render() {
    return(
      <TabLayout initialRouteName='images'>
        <Tabs.Screen
          name="images"
          options={{
            tabBarLabel: 'Image',
            tabBarIcon: (props) => <TabBarIcon icon='image' {...props} />
          }}
        />
        <Tabs.Screen
          name="icons"
          options={{
            tabBarLabel: 'Icon',
            tabBarIcon: (props) => <TabBarIcon icon='star' {...props} />
          }}
        />
        <Tabs.Screen
          name="text"
          options={{
            tabBarLabel: 'Text',
            tabBarIcon: (props) => <TabBarIcon icon='text-block' {...props} />
          }}
        />
        <Tabs.Screen
          name="group"
          options={{
            tabBarLabel: 'Group',
            tabBarIcon: (props) => <TabBarIcon icon='users' {...props} />
          }}
        />
      </TabLayout>
    );
  }
}