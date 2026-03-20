import React from 'react';
import { View, StyleSheet, StyleProp, TextStyle, ColorValue } from "react-native";
import ThemeContext, { BaseColors, BaseTheme, defaultTheme, FontSize, light } from '@flexnative/theme-context';


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
    
  
    </ThemeContext.Provider>
  );
}


export default App;

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