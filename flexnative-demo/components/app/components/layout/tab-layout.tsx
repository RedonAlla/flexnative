import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';

import ThemeContext from '@flexnative/theme-context';
import Icon from '@flexnative/icons';
import { IconName } from '@flexnative/icons';

import { HeaderBackground } from '@/components/layout/headers';


type Props = {
  initialRouteName: string;
  children: Array<React.ReactElement<typeof Tabs.Screen>>;
}

export default class extends React.PureComponent<Props, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  public render() {
    const isLight = Boolean(this.context.colorScheme === 'light');

    return(
      <>
        <StatusBar backgroundColor={'transparent'} animated={true} />
        <Tabs
          initialRouteName={this.props.initialRouteName}
          sceneContainerStyle= {{
            backgroundColor: this.context.colors.background,
            overflow: 'hidden'
          }}
          
          screenOptions={{
            headerShown: false,
            headerTitleStyle: {
              fontFamily: "SemiBold",
              color: this.context.colors.text,
            },
            tabBarAllowFontScaling: true,
            tabBarActiveBackgroundColor: 'transparent',
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarInactiveTintColor: this.context.colors.text,
            tabBarActiveTintColor: this.context.colors.primary,
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: 'transparent',
              borderTopWidth: 0,
              elevation: 0
            },
            tabBarBackground: () => (<HeaderBackground isLight={isLight} />)
          }}>
            { this.props.children }
        </Tabs>
      </>
    );
  }
}

export const TabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
  icon: keyof IconName
}): React.ReactNode => <Icon name={props.icon} color={props.color} size={props.size} />