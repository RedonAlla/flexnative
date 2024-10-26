import React from 'react';
import { Tabs } from 'expo-router';

import TabLayout, { TabBarIcon } from '@/components/app/components/layout/tab-layout';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return(
      <TabLayout initialRouteName='default'>
        <Tabs.Screen
          name="default"
          options={{
            tabBarLabel: 'Default',
            tabBarIcon: (props) => <TabBarIcon icon='number-input' {...props} />
          }}
        />
        <Tabs.Screen
          name="material-design"
          options={{
            tabBarLabel: 'Material Design',
            tabBarIcon: (props) => <TabBarIcon icon='material-design' {...props} />
          }}
        />
      </TabLayout>
    );
  }
}