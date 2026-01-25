import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
// import { Button } from 'react-native';
import ThemeContext, { defaultTheme, ThemeProvider, useThemeContext } from '@flexnative/theme-context';
import MyThemeProvider from "../src/test/MyThemeProvider";
import ToggleButton from "../src/test/ToggleButton";
import { useState } from "react";

export default function Page() {
   const router = useRouter();
  return (
    // <View style={styles.container}>
    //   <View style={styles.main}>
    //     <Text style={styles.title}>Hello World</Text>
    //     <Text style={styles.subtitle}>This is the first page of your app.</Text>
    //     <Button onPress={() => router.navigate('/storybook')} title="Go to Storybook" />
    //   </View>
    // </View>
    <MyThemeProvider>
      <TestComponent />
    </MyThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

function TestComponent() {
   const { state: theme, setTheme, setColorScheme } = useThemeContext();
   const [isToggleOn, setIsToggleOn] = useState(false);
   const isDarkMode = theme.isDark;

   const handlePressColorScheme = () => {
    setIsToggleOn(!isToggleOn);
    setColorScheme!(isToggleOn ? 'light' : 'dark');
    console.log('Current theme:', theme);
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.main}><Text style={[styles.title, { color: theme.colors.text }]}>Hello World</Text>
        <Text style={[styles.subtitle, { color: theme.colors.text }]}>Current Theme:</Text>
        
        <View style={{ height: 20, width: '100%', backgroundColor: theme.colors.primary }} />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, justifyContent: 'space-between' }}>
          <Text style={{ color: theme.colors.text, marginRight: 10, fontSize: 16 }}>Dark Mode</Text>
          <Button onPress={handlePressColorScheme} color={theme.colors.light} title="Switch Light" />
          <Button onPress={handlePressColorScheme} color={theme.colors.dark} title="Switch Dark" />
        </View>

        <Button onPress={() => setTheme!('BlueTheme')} color={'blue'} title="Switch Theme Blue" />
        <View style={{ height: 10 }} />
        <Button onPress={() => setTheme!('RedTheme')} color={'red'} title="Switch Theme Red" />
        <View style={{ height: 10 }} />
      </View>
    </View>
  );
}
