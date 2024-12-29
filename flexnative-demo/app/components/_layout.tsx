/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-11 21:02:00
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-27 21:48:36
 * @ Description: Layout for Components demo.
 */

import React from 'react';
import { Stack } from 'expo-router';
import ThemeContext from '@flexnative/theme-context';

import { isDark } from '@/utilities/theme.utilities';
import { HeaderBackground, StatusBar } from '@/components/layout/header';
import { HeaderActions } from '@/screens/components/layout/HeaderActions';


export default class extends React.PureComponent {

  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  
  public render() {
    const _isDark = isDark(this.context.scheme);

    return (
      <>
        <StatusBar scheme={this.context.scheme} />
        <Stack
          initialRouteName='index'
          screenOptions={{
            headerTintColor: this.context.colors.text,
            headerShadowVisible: false,
            gestureEnabled: false,
            headerBackButtonDisplayMode: 'minimal',
            headerTitleAlign: 'center',
            headerBackVisible: true,
            //headerLeft: (props) => (<BackButton {...props} isLight={isLight} />),
            headerRight: HeaderActions,
            headerBackground: () => (<HeaderBackground isDark={_isDark} />),
            animation: 'none',
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "Medium",
            },
            contentStyle: {
              backgroundColor: this.context.colors.background
            }
        }}>
          <Stack.Screen name="index" options={{title: 'Components'}} />
          <Stack.Screen name="buttons" options={{title: 'Buttons'}} />
          <Stack.Screen name="icons" options={{title: 'Icons'}} />
          <Stack.Screen name="text-boxes" options={{title: 'Text Box'}} />
          <Stack.Screen name="number-text-boxes" options={{title: 'Number Text Boxes'}} />
          <Stack.Screen name="avatar" options={{title: 'Avatar'}} />
          <Stack.Screen name="check-boxes" options={{title: 'Check Boxes'}} />
          <Stack.Screen name="check-list" options={{title: 'Check Box List'}} />
          <Stack.Screen name="tags" options={{title: 'Tags'}} />
          <Stack.Screen name="badges" options={{title: 'Badges'}} />
          <Stack.Screen name="spinner" options={{title: 'Spinner'}} />
          <Stack.Screen name="bottom-sheet" options={{title: 'Bottom Sheet'}} />
          <Stack.Screen name="skeleton-loader" options={{title: 'Skeleton Loader'}} />
        </Stack>
      </>
    )
  }
}