
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import TestTagComponents from './tests/components/tags/TestTagComponents';
import TestIcon from './tests/components/icons/Icon';
// import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

// import TestThemeContextConsumer from './tests/contexts/theme-consumer';
// import TestThemeChange from './tests/contexts/theme-change';
// import TestIcon from './tests/components/icons/Icon';
// import TestAvatarGroup from './tests/components/avatars/TestAvatarGroup';
// import TestButtonComponents from './tests/components/buttons/TestButtonComponents';
// import CustomThemeProvider from './tests/contexts/custom-theme-provider';
// import ThemeChange from './tests/contexts/theme-change';
// import TestThemeChange from './tests/contexts/theme-change';

export default function App() {
  return (
    // <TestThemeContextConsumer />
    // <Text>TEST</Text>
    // <TestThemeChange />
    // <TestAvatarGroup />
    <>
    <TestTagComponents />
    <TestIcon />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
