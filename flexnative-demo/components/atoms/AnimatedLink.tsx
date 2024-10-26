import React from 'react';
import { StyleSheet, Animated, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/build/link/Link';

import ThemeContext from '@flexnative/theme-context';


interface StateProps {
  hover: boolean;
  zoomAnim: Animated.Value;
}


const animationValues = (toValue: number, duration: number) => ({
  toValue: toValue,
  duration: duration,
  useNativeDriver: false //TODO
});

export default class extends React.Component<LinkProps, StateProps> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>
  
  constructor(props: LinkProps) {
    super(props);
    this.state = {
      hover: false,
      zoomAnim: new Animated.Value(1)
    };

    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
  }

  onPressIn = (): void =>
    Animated.timing(this.state.zoomAnim, animationValues(1.1, 150)).start();

  onPressOut = (): void =>
    Animated.timing(this.state.zoomAnim, animationValues(1, 150)).start();

  public render() {
    const { children, ...restProps } = this.props
    return (
      <Link {...restProps} asChild>
        <Pressable onPressIn={this.onPressIn} onPressOut={this.onPressOut} style={styles.container}>
          <Animated.View style={[styles.animatedView, {transform: [{scale: this.state.zoomAnim}] }]}>
            {children}
          </Animated.View>
        </Pressable>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    pointerEvents: 'auto',
    backgroundColor: 'transparent'
  },
  animatedView: {
    height: '100%',
    position: 'relative',
    marginHorizontal: 16,
    backgroundColor: 'transparent'
  },
});
