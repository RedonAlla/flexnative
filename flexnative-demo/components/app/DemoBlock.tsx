import React from 'react';
import { StyleSheet, View, Text, ViewStyle } from 'react-native';

import ThemeContext from '@flexnative/theme-context';


type CardProps = {
  title: string;
  children: React.ReactNode | React.ReactNode[],
  contentStyle?: ViewStyle
}

export default class extends React.PureComponent<CardProps, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  public render() {
    const { title, children, contentStyle } = this.props;
    const backgroundColor = Boolean(this.context === null || this.context === undefined) ? 'transparent' : this.context.colors.card;

    return (
      <View style={[styles.wrapper, { backgroundColor }]}>
        <Text style={[styles.title, {color: this.context.colors.text}]}>{title}</Text>
        <View style={[styles.contentStyle, contentStyle]}>
          {children}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%'
  },
  title: {
    fontWeight: '700',
    fontFamily: 'Bold',
    paddingBottom: 13
  },
  contentStyle: {
    rowGap: 13,
    columnGap: 13,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});