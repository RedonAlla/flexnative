import React from 'react';
import { View, StyleSheet, StyleProp, TextStyle } from "react-native";
import Chat from '../packages/navigation/screens/Chat';
import { withFancyDrawer } from '../packages/navigation/src/with-fancy-drawer';
import { SecondaryButton } from '../packages/buttons/src/SecondaryButton';
import PrimaryButton from '../packages/buttons/src/PrimaryButton';
import ThemeContext, { BaseColors, BaseTheme, Borders, dark, defaultTheme, FontSize, light, Spaces } from '@flexnative/theme-context';
import Button from '../packages/buttons/src/button';
import Icon from '@flexnative/icons';

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

const theme = createTheme<{}>({colors: light, fontSize});
theme.scheme = 'light'

function App() {
  return (
    // <Chat />
  //  <MessageText />
  
  <ThemeContext.Provider value={{state: theme}}>
    <View style={[styles.container, {flexDirection: "row", backgroundColor: theme.colors.background}]}>
      <View style={styles.container}>
        <Button text='default' type='default' color='default' icon='star' iconRight iconStyle={styles.buttonText} />
        <Button text='default' type='default' color='primary'icon='star' iconRight iconStyle={textStyles()} borderWidth='thick' />
        <Button text='default' type='default' color='secondary' icon='star' pressedBoxShadow="5px 5px red, -1em 0 0.4em olive;" />
        <Button text='default' type='default' color='info' icon='star'/>
        <Button text='default' type='default' color='success'icon='star' />
        <Button text='default' type='default' color='warning' icon='star'/>
        <Button text='default' type='default' color='error' icon='star'/>
        <Button text='default' type='default' color='dark' icon='star'/>
        <Button text='default' type='default' color='light' icon='star'/>
        <Button text='default' type='default' color='blue' icon='star'/>

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>

      <View style={styles.container}>
        <Button text='ghost' type='ghost' color='default' icon='star'/>
        <Button text='ghost' type='ghost'  color='primary'icon='star'/>
        <Button text='ghost' type='ghost' color='secondary' icon='star'/>
        <Button text='ghost' type='ghost' color='info' icon='star'/>
        <Button text='ghost' type='ghost' color='success' icon='star'/>
        <Button text='ghost' type='ghost' color='warning' icon='star'/>
        <Button text='ghost' type='ghost' color='error' icon='star'/>
        <Button text='ghost' type='ghost' color='dark' icon='star'/>
        <Button text='ghost' type='ghost' color='light' icon='star'/>
        <Button text='ghost' type='ghost' color='blue' icon='star'/>

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>

      <View style={styles.container}>
        <Button text='inverse' type='inverse' color='default' icon='star'/>
        <Button text='inverse' type='inverse' color='primary'icon='star'/>
        <Button text='inverse' type='inverse' color='secondary' icon='star'/>
        <Button text='inverse' type='inverse' color='info' icon='star'/>
        <Button text='inverse' type='inverse' color='success' icon='star'/>
        <Button text='inverse' type='inverse' color='warning' icon='star'/>
        <Button text='inverse' type='inverse' color='error' icon='star'/>
        <Button text='inverse' type='inverse' color='dark' icon='star'/>
        <Button text='inverse' type='inverse' color='light' icon='star'/>
        <Button text='inverse' type='inverse' color='blue' icon='star'/>

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>
      
      <View style={styles.container}>
        <Button text='link' type='link' color='default' icon='star'/>
        <Button text='link' type='link' color='primary' icon='star'/>
        <Button text='link' type='link' color='secondary' icon='star'/>
        <Button text='link' type='link' color='info' icon='star'/>
        <Button text='link' type='link' color='success' icon='star'/>
        <Button text='link' type='link' color='warning'icon='star'/>
        <Button text='link' type='link' color='error' icon='star'/>
        <Button text='link' type='link' color='dark' icon='star'/>
        <Button text='link' type='link' color='light' icon='star'/>
        <Button text='link' type='link' color='blue' icon='star'/>

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>

      <View style={styles.container}>
        <Button text='text' type='text' color='default' icon='star'/>
        <Button text='text' type='text' color='primary'icon='star'/>
        <Button text='text' type='text' color='secondary' icon='star'/>
        <Button text='text' type='text' color='info' icon='star'/>
        <Button text='text' type='text' color='success' icon='star'/>
        <Button text='text' type='text' color='warning' icon='star'/>
        <Button text='text' type='text' color='error' icon='star'/>
        <Button text='text' type='text' color='dark' icon='star'/>
        <Button text='text' type='text' color='light' icon='star'/>
        <Button text='text' type='text' color='blue' icon='star'/>

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
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