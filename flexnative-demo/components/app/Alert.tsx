import React from 'react';
import { StyleSheet, View, Text, ColorValue } from 'react-native';

import ThemeContext, { BaseTheme } from '@flexnative/theme-context';
import FalsyComponent from '../atoms/FalsyComponent';

export const GHOST_TRANSPARENCY = '18';
export const GHOST_ACTIVE_TRANSPARENCY = '73';

type MessageType = 'note' | 'info' | 'success' | 'error' | 'warning';

type Props = {
  message?: string | React.ReactElement;
  type?: MessageType;
}

export default class extends React.PureComponent<Props, {}> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>;

  static defaultProps = {
    type: 'note',
  }

  public render() {
    const color = getColor(this.props.type!, this.context.colors);

    return (
      <View style={[styles.wrapper, { backgroundColor: `${color.toString()}${GHOST_TRANSPARENCY}`}]}>
        <FalsyComponent
          style={[styles.title, { color: color}]}
          fallback={this.props.message as React.ReactElement}
          component={React.isValidElement(this.props.message) ? undefined : <Text>{ this.props.message as string }</Text>}
        />
      </View>
    );
  }
}

function getColor(type: MessageType, theme: BaseTheme): ColorValue {
  switch (type) {
    case 'warning':
      return theme.warning;
    case 'error':
      return theme.error;
    case 'success':
      return theme.success;
    case 'info':
      return theme.info;
    default:
      return theme.text;
  }
}


const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 12,
    borderRadius: 5,
    width: '100%'
  },
  title: {
    fontSize: 12,
    fontStyle: 'italic'
  }
});