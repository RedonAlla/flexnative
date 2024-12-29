/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-15 21:38:50
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-22 21:41:12
 * @ Description: Layout for numeric text demo screens.
 */

import React from 'react';
import { Tabs } from 'expo-router';

import TabLayout, { TabBarIcon } from '@/screens/components/layout/TabLayout';


export default class DemoNumericTextBox extends React.PureComponent {
  public render() {
    return(
      <TabLayout initialRouteName='default'>
        <Tabs.Screen
          name="default"
          options={{
            tabBarLabel: 'Default',
            tabBarIcon: (props) => <TabBarIcon icon='text-box' {...props} />
          }}
        />
        <Tabs.Screen
          name="material"
          options={{
            tabBarLabel: 'Material Design',
            tabBarIcon: (props) => <TabBarIcon icon='material-design' {...props} />
          }}
        />
      </TabLayout>
    );
  }
}