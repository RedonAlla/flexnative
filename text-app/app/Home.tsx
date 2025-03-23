import React from 'react';
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";
import Chat from '../packages/navigation/screens/Chat';
import { withFancyDrawer } from '../packages/navigation/src/with-fancy-drawer';
import { SecondaryButton } from '../packages/buttons/src/SecondaryButton';
import PrimaryButton from '../packages/buttons/src/PrimaryButton';
import ThemeContext, { BaseColors, BaseTheme, Borders, dark, defaultTheme, FontSize, light, Spaces } from '@flexnative/theme-context';
import Button from '../packages/buttons/src/button';
import Icon from '@flexnative/icons';
import Avatar, { AvatarGroup } from '../packages/avatar/src';

// import MessageText from '../tests/components/messages/border-color';

const fontSize: Record<FontSize, number> = {
  'xxs': 8,
  'xs': 12,
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
  'xxl': 24,
}

export const LOGO_PATH = require('../assets/favicon.png');

const theme = createTheme<{}>({colors: light, fontSize});
theme.scheme = 'light'

function App() {
  return (
    // <Chat />
  //  <MessageText />
  
  <ThemeContext.Provider value={{state: theme}}>
    <View style={[styles.container, {flexDirection: "row", backgroundColor: theme.colors.background}]}>
      <View style={styles.container}>

      <Avatar type="icon" icon="star" size='small' />
          <Avatar type="icon" icon="star" size='medium' />
          <Avatar type="icon" icon="star" size='large' />
          <Avatar type="icon" icon="star" size={120} />
        </View>

      <View style={styles.container}>
        <Avatar type="icon" icon="star"   fillMode='none' color='primary'/>
          <Avatar type="icon" icon='star' fillMode='none' color='secondary'/>
          <Avatar type="icon" icon="star" fillMode='none' color='success'/>
          <Avatar type="icon" icon="star" fillMode='none' color='info'/>
          <Avatar type="icon" icon="star" fillMode='none' color='warning' />
          <Avatar type="icon" icon="star" fillMode='none' color='error'/>
          <Avatar type="icon" icon="star" fillMode='none' color='default'/>
          <Avatar type="icon" icon="star" fillMode='none' color='dark'/>
          <Avatar type="icon" icon="star" fillMode='none' color='light'/>
          
          <Avatar type="icon" icon="star" fillMode='none' color='crimson'/>
          <Avatar type="icon" icon="star" fillMode='none' color='#ed143d'/>
          <Avatar type="icon" icon="star" fillMode='none' color='rgb(237, 20, 61)'/>
          <Avatar type="icon" icon="star" fillMode='none' color='rgba(237, 20, 61, 0.5)'/>
      </View>

      <View style={styles.container}>
      <Avatar type="icon" icon="star"     fillMode='ghost' color='primary'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='secondary'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='success'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='info'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='warning' />
          <Avatar type="icon" icon="star" fillMode='ghost' color='error'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='default'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='dark'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='light'/>
          
          <Avatar type="icon" icon="star" fillMode='ghost' color='crimson'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='#ed143d'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='rgb(237, 20, 61)'/>
          <Avatar type="icon" icon="star" fillMode='ghost' color='rgba(237, 20, 61, 0.5)'/>
      </View>
      
      <View style={styles.container}>
      </View>

      <View style={styles.container}>
      </View>
    </View>
  
    </ThemeContext.Provider>
  );
}

const textStyles = () => {
  return (pressed: boolean): StyleProp<TextStyle> => {
    return [
      {
        color: pressed ? '#FFC300' : 'white'
      }
    ]
  }
} 

export default withFancyDrawer(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonText: {
    color: '#FFC300'
  }
});

export function createTheme<TColors>(props: Partial<BaseTheme<TColors>>): BaseTheme<TColors> {
  const theme = defaultTheme();

  return {
    isDark: false,
    colors: {
      ...theme.colors,
      ...(props.colors ?? {})
    } as BaseColors & TColors,
    spaces: {
      ...theme.spaces,
      ...(props.spaces! ?? {})
    },
    scheme: theme.scheme,
    fontSize: fontSize ?? theme.fontSize,
    borders: {
      ...theme.borders,
      ...(props.borders ?? {})
    }
  }
}