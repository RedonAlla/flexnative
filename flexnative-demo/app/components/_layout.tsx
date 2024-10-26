import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View, ColorValue } from 'react-native';

import ThemeContext from '@flexnative/theme-context';
import BottomSheet from '@flexnative/bottom-sheet';

import { HeaderBackground } from '@/components/layout/headers';
import BackButton from '@/components/layout/headers/back-button/index.web';
import ThemeColorsDialog from '@/components/layout/theme-colors-dialog';
import Action from '@/components/layout/headers/Action';
import { DARK_OVERLAY, LIGHT_OVERLAY } from '@/constants/colors';
import { ACTIVE_GHOST_TRANSPARENCY, GHOST_TRANSPARENCY, HEADER_HORIZONTAL_PADDING } from '@/components/layout/headers/constants';


const isWeb = Platform.OS === 'web';

export default class extends React.PureComponent<{}, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;
  private themeColorsDialog: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);
    this.themeColorsDialog = React.createRef();
    this.changeColorSchemeToggle = this.changeColorSchemeToggle.bind(this);
  }

  private changeColorSchemeToggle() {
    this.context!.setColorScheme!(this.context.colorScheme == 'dark' ? 'light' : 'dark')
  }

  public render() {
    const isLight = Boolean(this.context.colorScheme === 'light');

    return(
      <>
        <StatusBar style={isLight ? 'dark' : 'light'} backgroundColor={'transparent'} animated={true} />
        <Stack
          screenOptions={{
            headerTintColor: this.context.colors.text,
            headerShadowVisible: false,
            headerTitleAlign: isWeb ? 'left' : 'center',
            headerBackTitleVisible: false,
            //headerLeft: (props) => (<BackButton {...props} isLight={isLight} />),
            headerBackground: () => (<HeaderBackground isLight={isLight} />),
            headerRight: (props) => (<HeaderRight
              isLight={isLight}
              themeColor={this.context.colors.primary}
              tintColor={props.tintColor}
              toggleColorScheme={this.changeColorSchemeToggle}
              toggleThemeDialog={() => this.themeColorsDialog?.current?.open()}
            />),
            headerBackVisible: true,
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "Medium",
              color: this.context.colors.text,
            },
            contentStyle: {
              overflow: 'hidden',
              backgroundColor: this.context.colors.background
            },
            animation: 'none'
        }}>
          <Stack.Screen name="index" options={{title: 'Components'}} />
          <Stack.Screen name="buttons" options={{title: 'Buttons'}} />
          <Stack.Screen name="icons" options={{title: 'Icons'}} />
          <Stack.Screen name="spinner" options={{title: 'Spinner'}} />
          <Stack.Screen name="bottom-sheet" options={{title: 'Bottom Sheet'}} />
          <Stack.Screen name="tags" options={{title: 'Tags'}} />
          <Stack.Screen name="badges" options={{title: 'Badges'}} />
          <Stack.Screen name="avatar" options={{title: 'Avatars'}} />
          <Stack.Screen name="skeleton-loader" options={{title: 'Skeleton Loader'}} />
          <Stack.Screen name="text-boxes" options={{title: 'Text Boxes'}} />
          <Stack.Screen name="number-text-boxes" options={{title: 'Number Text Boxes'}} />
          <Stack.Screen name="check-boxes" options={{title: 'Check Boxes'}} />
          <Stack.Screen name="check-list" options={{title: 'Check Box List'}} />
        </Stack>
        <ThemeColorsDialog bottomSheetRef={this.themeColorsDialog}
                          currentTheme={this.context.colors.primary}
                          onChangeColorTheme={() => this.themeColorsDialog.current!.close()}
        />
      </>
    );
  }
}


interface Props {
  isLight: boolean;
  themeColor: ColorValue;
  tintColor?: ColorValue;
  toggleThemeDialog(): void;
  toggleColorScheme(): void;
}

class HeaderRight extends React.PureComponent<Props, {}> {
  public render() {
    return(
      <View style={[styles.headerRight, isWeb ? { marginRight: HEADER_HORIZONTAL_PADDING } : undefined]}>
        <Action icon={this.props.isLight ? "moon" : 'sun'}
              backgroundColor='transparent'
              iconColor={this.props.tintColor!}
              overlayColor={this.props.isLight ? DARK_OVERLAY : LIGHT_OVERLAY}
              onClick={this.props.toggleColorScheme}
        />
        <Action icon="color-palete"
              backgroundColor={`${this.props.themeColor.toString()}${GHOST_TRANSPARENCY}`}
              iconColor={this.props.themeColor}
              overlayColor={`${this.props.themeColor.toString()}${ACTIVE_GHOST_TRANSPARENCY}`}
              onClick={this.props.toggleThemeDialog}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    backgroundColor: 'transparent'
  }
});