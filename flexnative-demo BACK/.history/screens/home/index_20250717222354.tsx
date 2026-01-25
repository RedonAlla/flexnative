/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-09 19:58:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-07-17 22:23:54
 * @ Description: `AppHome`screen component. Supporting components used to render links with styled content.
 */

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ZoomableLink from '@/components/common/ZoomableLink';
import ThemeContext, { useThemeColors } from '@flexnative/theme-context';

import { MAX_WIDTH } from '@/constants/layout';
import AppDemoIcon from './AppDemoIcon';
import ComponentsDemoIcon from './ComponentsDemoIcon';
import { AppLinkProps, AppProps } from './App.props';


/**
 * `AppHome`screen component. Supporting components used to render links with styled content.
 */
const AppHome: React.FC<AppProps> = ({ paddingTop }) => {
   const themeColors = useThemeColors();

  const colors = {
    text: themeColors.text,
    borders: themeColors.border,
    background: themeColors.card,
  };

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: themeColors.card,
        paddingTop: paddingTop
      }]}>
      <AppLink
        href="/app-demo"
        title="Demo App"
        description="Test demo app"
        colors={colors}
      >
        <AppDemoIcon />
      </AppLink>

      <AppLink
        href="/components"
        title="Components Demo"
        description="Components Demo"
        colors={colors}
      >
        <ComponentsDemoIcon />
      </AppLink>
    </View>
  );
};

const AppLink: React.FC<AppLinkProps> = ({ href, title, description, colors, children }) => (
  <ZoomableLink href={href} style={styles.link}>

    { children }
    
    <View style={[styles.cardContainer, { borderColor: colors.borders, backgroundColor: colors.background }]}>
      <View style={styles.cardSpace} />
      <View style={styles.cardContent}>
        <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
        <Text style={[styles.description, {color: colors.text}]}>{description}</Text>
      </View>
    </View>
  </ZoomableLink>
);

const styles = StyleSheet.create({
  link: {
    width: '100%',
    height: '45%',
    paddingVertical: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    maxWidth: MAX_WIDTH,
    display: 'flex',
    marginHorizontal: "auto",
    backgroundColor: 'red'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Bold',
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    height: '65%',
    position: 'absolute',
    bottom: '15%',
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  cardSpace: {
    flex: 1,
  },
  cardContent: {
    flex: 1,
    paddingLeft: 32
  },
  description: {
    fontSize: 16,
    fontFamily: 'Regular',
    paddingTop: 12
  }
});

export default AppHome;