import React from 'react';
import { View } from 'react-native';
import { NavigationContext } from '@react-navigation/native';

import Action from '../Action';
import { DARK_OVERLAY, LIGHT_OVERLAY } from '@/constants/colors';
import { HEADER_HORIZONTAL_PADDING } from '../constants';


interface Props {
  tintColor?: string;
  canGoBack: boolean;
  isLight: boolean;
}

export default class extends React.PureComponent<Props, {}> {
  static contextType = NavigationContext;
  declare context: React.ContextType<typeof NavigationContext>;

  public render() {
    if(!this.props.canGoBack)
      return null;

    return (
      <View style={{marginLeft: HEADER_HORIZONTAL_PADDING}}>
        <Action icon="chevron-left"
              backgroundColor='transparent'
              iconColor={this.props.tintColor!}
              overlayColor={this.props.isLight ? DARK_OVERLAY : LIGHT_OVERLAY}
              onClick={() => this.context!.goBack()}
        />
      </View>
    );
  }
}