import React from 'react';
import { Text, View, ColorValue, StyleSheet } from 'react-native';

import ThemeContext from '@flexnative/theme-context';

import AnimatedLink from '@/components/atoms/AnimatedLink';
import AppDemoIcon from '@/components/icons/AppDemo';
import ComponentsApp from '@/components/icons/ComponentsApp';


const ICON_WIDTH = '60%';
const ICON_HEIGHT = '100%';

export default class extends React.Component<AppLinkProps, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>

  public render() {
    return (
      <View style={[styles.wrapper, { backgroundColor: this.context.colors.card}]}>
        <View style={styles.container}>
          <AppLink href="/app-demo"
                  title="Demo App"
                  description="Test demo app"
                  textColor={this.context.colors.text}
                  borderColor={this.context.colors.border}
                  backgroundColor={this.context.colors.card}>
            <AppDemoIcon width={ICON_WIDTH}
                        height={ICON_HEIGHT}
                        primaryColor={this.context.colors.primary}
                        txtColor={this.context.colors.text}
                        cardColor={this.context.colors.card}
                        bgColor={this.context.colors.background}
                        bordersColor={this.context.colors.border} />
          </AppLink>

          <AppLink href="/components"
                title="Components Demo"
                description="Components Demo"
                textColor={this.context.colors.text}
                borderColor={this.context.colors.border}
                backgroundColor={this.context.colors.card}>
            <ComponentsApp width={ICON_WIDTH}
                        height={ICON_HEIGHT}
                        primaryColor={this.context.colors.primary}
                        txtColor={this.context.colors.text}
                        cardColor={this.context.colors.card}
                        bgColor={this.context.colors.background}
                        bordersColor={this.context.colors.border} />
          </AppLink>
        </View>
      </View>
    );
  }
}

interface AppLinkProps {
  href: string;
  title: string;
  description: string;
  children: React.ReactElement;
  textColor: ColorValue;
  borderColor: ColorValue;
  backgroundColor: ColorValue;
}

class AppLink extends React.Component<AppLinkProps, {}> {
  public render() {
    return (
      <AnimatedLink href={this.props.href} style={{width: '100%', height: '45%', paddingVertical: 25}}>
        <View style={[styles.cardContainer, { borderColor: this.props.borderColor, backgroundColor: this.props.backgroundColor }]}>
          <View style={styles.cardSpace} />
          <View style={styles.cardContent}>
            <Text style={[styles.title, {color: this.props.textColor}]}>{this.props.title}</Text>
            <Text style={[styles.description, {color: this.props.textColor}]}>{this.props.description}</Text>
          </View>
        </View>
          { React.cloneElement(this.props.children, { style: styles.icon }) }
      </AnimatedLink>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    maxWidth: 960,
    display: 'flex',
    marginHorizontal: "auto",
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
  },
  icon: {
    position: 'absolute',
    left: '-3%',
    bottom: '-3%'
  }
});
