/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-09 19:58:03
 * @ Modified by: Redon Alla
 * @ Modified time: 2026-05-18 22:23:37
 * @ Description: `AppHome`screen component. Supporting components used to render links with styled content.
 */

import React from 'react';
import { Text, View, StyleSheet, ColorValue, ScrollView } from 'react-native';
import { Fonts, useThemeColors } from '@flexnative/theme-context';
import ZoomableLink from '@/components/ui/zoomable-link';
import AppDemoIcon from './app-demo-icon';
import ComponentsDemoIcon from './components-demo-icon';
import StorybookIcon from './storybook-icon';

const MAX_WIDTH = 960;

type AppProps = {
  paddingTop?: number;
}

 type AppLinkProps = {
  /**
   * `href` specifies the URL or path where the link will navigate when clicked.
   */
  href: any;

  /**
   * `title` provides a text title for the link, often displayed as a tooltip or used for accessibility purposes.
   */
  title: string;

  /**
   * `description` offers a textual description of the link's purpose or destination.
   */
  description: string;

  /**
   * `colors` defines styling attributes specifically for the link component.
   */
  colors: {
    /**
     * `text` is a type `ColorValue` representing the link's text color.
     */
    text: ColorValue;

    /**
     * `borders` is a type `ColorValue` indicating the border color of the link.
     */
    borders: ColorValue;

    /**
     * `background` is a type `ColorValue` specifying the background color of the link.
     */
    background: ColorValue;
  };

  /**
   * `children` represents the React element(s) nested inside the link, utilized to maintain a flexible structure.
   */
  children: React.ReactElement;
}

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
    <ScrollView 
      contentContainerStyle={[styles.container,
        {
        backgroundColor: themeColors.card,
        paddingTop: paddingTop
      }
      ]}>
      <AppLink
        href="/app-demo"
        title="Application Showcase"
        description="A fully featured mobile application demo built with the FlexNative framework."
        colors={colors}
      >
        <AppDemoIcon />
      </AppLink>

      <AppLink
        href="/components"
        title="UI Component Library"
        description="Explore our collection of modular UI components and their implementation use cases."
        colors={colors}
      >
        <ComponentsDemoIcon />
      </AppLink>

      <AppLink
        href="/storybook"
        title="Interactive Storybook"
        description="Experiment with components in isolation to visualize their different states and props."
        colors={colors}
      >
        <StorybookIcon />
      </AppLink>
    </ScrollView>
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
    flex: 1,
    width: '100%',
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
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.sans,
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
    fontFamily: Fonts.sans,
    paddingTop: 12
  }
});

export default AppHome;