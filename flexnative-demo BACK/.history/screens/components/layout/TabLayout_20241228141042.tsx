/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-15 21:32:53
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-19 19:03:55
 * @ Description: This code integrates theming into a tab navigation component in a React application, enhancing user interface consistency with dynamic theming properties and structured TypeScript types.
 */

import React from 'react';
import { Tabs } from 'expo-router';

import ThemeContext from '@flexnative/theme-context';
import Icon from '@flexnative/icons';
import { IconName } from '@flexnative/icons';
import { HeaderBackground } from '@/components/layout/header/Background';
import { isDark } from '@/utilities/theme.utilities';


/**
 * Define a Props type for the component, specifying the expected structure of props.
 */
type Props = {
  /**
   * A string indicating the initial route's name in the Tabs.
   */
  initialRouteName: string;

  /**
   * An array of React elements, each of which must be a `Tabs.Screen` component.
   */
  children: Array<React.ReactElement<typeof Tabs.Screen>>;
}

export default class extends React.PureComponent<Props> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  public render() {
    const _isDark = isDark(this.context.scheme);

    return(
      <Tabs
        initialRouteName={this.props.initialRouteName}
        screenOptions={{
          headerShown: false,
          tabBarAllowFontScaling: true,
          tabBarInactiveTintColor: this.context.colors.text,
          tabBarActiveTintColor: this.context.colors.primary,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0
          },
          tabBarBackground: () => (<HeaderBackground isDark={_isDark} />),
          sceneStyle: {
            backgroundColor: this.context.colors.background
          }
        }}>
          { this.props.children }
      </Tabs>
    );
  }
}


/**
 * Component `TabBarIcon`, designed for rendering icons in the tab bar based on given properties.
 * 
 * @param props 
 * @returns 
 */
export const TabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
  icon: keyof IconName
}): React.ReactNode => <Icon name={props.icon} color={props.color} size={props.size} />