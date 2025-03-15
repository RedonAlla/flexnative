import React from 'react';
import { View, StyleSheet } from "react-native";
import Chat from '../packages/navigation/screens/Chat';
import { withFancyDrawer } from '../packages/navigation/src/with-fancy-drawer';
import Button from '../packages/buttons/src/components/button';
import { SecondaryButton } from '../packages/buttons/src/SecondaryButton';
import PrimaryButton from '../packages/buttons/src/PrimaryButton';
import ThemeContext, { BaseColors, BaseTheme, Borders, dark, defaultTheme, FontSize, light, Spaces } from '@flexnative/theme-context';

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
        <Button text='default' type='default' color='default' />
        <Button text='default' type='default' color='primary'/>
        <Button text='default' type='default' color='secondary' />
        <Button text='default' type='default' color='info' />
        <Button text='default' type='default' color='success' />
        <Button text='default' type='default' color='warning' />
        <Button text='default' type='default' color='error' />
        <Button text='default' type='default' color='dark' />
        <Button text='default' type='default' color='light' />
        <Button text='default' type='default' color='blue' />

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>
      
      <View style={styles.container}>
        <Button text='ghost' type='ghost' color='default' />
        <Button text='ghost' type='ghost'  color='primary'/>
        <Button text='ghost' type='ghost' color='secondary' />
        <Button text='ghost' type='ghost' color='info' />
        <Button text='ghost' type='ghost' color='success' />
        <Button text='ghost' type='ghost' color='warning' />
        <Button text='ghost' type='ghost' color='error' />
        <Button text='ghost' type='ghost' color='dark' />
        <Button text='ghost' type='ghost' color='light' />
        <Button text='ghost' type='ghost' color='blue' />

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>

      <View style={styles.container}>
        <Button text='inverse' type='inverse' color='default' />
        <Button text='inverse' type='inverse' color='primary'/>
        <Button text='inverse' type='inverse' color='secondary' />
        <Button text='inverse' type='inverse' color='info' />
        <Button text='inverse' type='inverse' color='success' />
        <Button text='inverse' type='inverse' color='warning' />
        <Button text='inverse' type='inverse' color='error' />
        <Button text='inverse' type='inverse' color='dark' />
        <Button text='inverse' type='inverse' color='light' />
        <Button text='inverse' type='inverse' color='blue' />

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>
      
      <View style={styles.container}>
        <Button text='link' type='link' color='default' />
        <Button text='link' type='link' color='primary'/>
        <Button text='link' type='link' color='secondary' />
        <Button text='link' type='link' color='info' />
        <Button text='link' type='link' color='success' />
        <Button text='link' type='link' color='warning' />
        <Button text='link' type='link' color='error' />
        <Button text='link' type='link' color='dark' />
        <Button text='link' type='link' color='light' />
        <Button text='link' type='link' color='blue' />

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>

      <View style={styles.container}>
        <Button text='text' type='text' color='default' />
        <Button text='text' type='text' color='primary'/>
        <Button text='text' type='text' color='secondary' />
        <Button text='text' type='text' color='info' />
        <Button text='text' type='text' color='success' />
        <Button text='text' type='text' color='warning' />
        <Button text='text' type='text' color='error' />
        <Button text='text' type='text' color='dark' />
        <Button text='text' type='text' color='light' />
        <Button text='text' type='text' color='blue' />

        <SecondaryButton label='Button' />
        <PrimaryButton text="Button" />
      </View>
    </View>
  
    </ThemeContext.Provider>
  );
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