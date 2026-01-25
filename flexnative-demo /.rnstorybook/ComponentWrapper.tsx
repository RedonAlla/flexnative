import React from 'react';
import { View, StyleSheet } from 'react-native';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

interface componentNameProps {
  children?: React.ReactNode;
}

const ComponentWrapper = (props: componentNameProps) => {
  return (
    <ThemeContext.Provider value={{state: defaultTheme()}}>
      <View style={styles.container}>
        { props.children }
      </View>
    </ThemeContext.Provider>
  );
};

export default ComponentWrapper;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: 'rgba(38, 85, 115, 0.15)',
    borderWidth: 1,
  }
});
