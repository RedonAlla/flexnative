import React from 'react';
import { NavigationContext } from '@react-navigation/native';

import Action from '../Action';
import { DARK_OVERLAY, LIGHT_OVERLAY } from '@/constants/colors';


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
      <Action icon="chevron-left"
            backgroundColor='transparent'
            iconColor={this.props.tintColor!}
            overlayColor={this.props.isLight ? DARK_OVERLAY : LIGHT_OVERLAY}
            onClick={() => this.context!.goBack()}
      />
    );
  }
}