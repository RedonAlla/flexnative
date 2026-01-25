/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-24 20:37:58
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-24 20:45:38
 * @ Description: Route for Check List demo screen.
 */

import { Tabs } from "expo-router";
import React from "react";
import TabLayout, { TabBarIcon } from "@/screens/components/layout/TabLayout";


/**
 * A React PureComponent that renders a TabLayout with two Tabs.Screen components.
 * 
 * @component
 * @extends React.PureComponent
 * 
 * @example
 * <TabLayout initialRouteName='list'>
 *   <Tabs.Screen
 *     name="default"
 *     options={{
 *       tabBarLabel: 'Default',
 *       tabBarIcon: (props) => <TabBarIcon icon='check-list' {...props} />
 *     }}
 *   />
 *   <Tabs.Screen
 *     name="material-design"
 *     options={{
 *       tabBarLabel: 'Material Design',
 *       tabBarIcon: (props) => <TabBarIcon icon='material-design' {...props} />
 *     }}
 *   />
 * </TabLayout>
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default class extends React.PureComponent {
  public render() {
    return(
      <TabLayout initialRouteName='default'>
        <Tabs.Screen
          name="default"
          options={{
            tabBarLabel: 'Default',
            tabBarIcon: (props) => <TabBarIcon icon='check-list' {...props} />
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