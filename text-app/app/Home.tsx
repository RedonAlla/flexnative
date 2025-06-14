import React from 'react';
import { View, Text, StyleSheet, StyleProp, TextStyle, ColorValue } from "react-native";
import Chat from '../packages/navigation/screens/Chat';
import { withFancyDrawer } from '../packages/navigation/src/with-fancy-drawer';
import { SecondaryButton } from '../packages/buttons/src/SecondaryButton';
import PrimaryButton from '../packages/buttons/src/PrimaryButton';
import ThemeContext, { BaseColors, BaseTheme, Borders, dark, defaultTheme, FontSize, light, Spaces } from '@flexnative/theme-context';
import Button from '../packages/buttons/src/button';
import Icon from '@flexnative/icons';
import Avatar, { AvatarGroup } from '../packages/avatar/src';
import Message from '../packages/messages/src';
import Badge from '../packages/badges';
import SkeletonLoader, { Circle, Rect } from '../packages/skeleton-loading';
import Tag from '../packages/ra-tags/src';
import CheckBox from '../packages/inputs/src/check-box';
import { NumericTextBox, StateCallbackType, TextBox } from '../packages/inputs/src';
import CheckBoxListDefault from '../packages/inputs/src/check-box-list/CheckBoxListDefault';
import CheckBoxListDemo from '../components/CheckBoxListDemo';

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
theme.scheme = 'light';

function App() {
  const [value, setValue] = React.useState(false); 
  return (
    // <Chat />
  //  <MessageText />
  
  <ThemeContext.Provider value={{state: theme}}>
    <View style={[styles.container, {flexDirection: "row", backgroundColor: theme.colors.background}]}>
      <View style={{display: "flex", flexDirection: "row"}}>
        <View ><Button text='Button' onPress={() => {}} color='primary' type='default' /></View>
        
        <View style={{flexDirection:'column', height:'auto', flex: 1, backgroundColor: 'white'}}>
          <CheckBoxListDemo />
        </View>
        
      </View>
    </View>
  
    </ThemeContext.Provider>
  );
}

const labelStyles = (defaultColor: ColorValue, activeColor: ColorValue) => {
  return (state: StateCallbackType): StyleProp<TextStyle> => {
    return [
      {
        color: state.focused ? activeColor : defaultColor
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
  },
  label: {
    fontSize: 32
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