import React from 'react';
import { Tabs } from 'expo-router';

import ThemeContext from '@flexnative/theme-context';

import TabLayout, { TabBarIcon } from '@/components/app/components/layout/tab-layout';


export default class extends React.PureComponent<{}, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

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