
import React from 'react';
import { StyleSheet, Text } from 'react-native';
// import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

import TestThemeContextConsumer from './tests/contexts/theme-consumer';
import TestThemeChange from './tests/contexts/theme-change';
import TestIcon from './tests/components/icons/Icon';
import TestAvatarGroup from './tests/components/avatars/TestAvatarGroup';
import TestBadgesComponent from './tests/components/badges/TestBadgesComponent';
// import CustomThemeProvider from './tests/contexts/custom-theme-provider';
// import ThemeChange from './tests/contexts/theme-change';
// import TestThemeChange from './tests/contexts/theme-change';

export default function App() {
  return (
    // <TestThemeContextConsumer />
    // <Text>TEST</Text>
    // <TestThemeChange />
    // <TestAvatarGroup />
    <TestBadgesComponent />
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
