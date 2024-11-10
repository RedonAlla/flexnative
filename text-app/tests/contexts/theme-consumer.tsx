import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeContext, { defaultTheme } from '@flexnative/theme-context';

class ThemeContextConsumer extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => <View style={[styles.container, { backgroundColor: value.colors.background }]}>
            <Text style={{ color: value.colors.text }}>
              { JSON.stringify(value, null, 2) }
            </Text>
          </View>
        }
      </ThemeContext.Consumer>
    );
  }
}

export default class TestThemeContextConsumer extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value={defaultTheme()}>
        <ThemeContextConsumer />
      </ThemeContext.Provider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
