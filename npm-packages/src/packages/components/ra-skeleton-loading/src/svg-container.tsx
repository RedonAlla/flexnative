/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-08 12:58:28
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-10-17 20:16:10
 * @ Description: SkeletonLoader container component.
 */

import React from 'react';
import { Animated, ColorValue } from 'react-native';
import Svg, {
  ClipPath,
  Defs,
  LinearGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import ThemeContext from '@flexnative/theme-context';

import { IContentLoaderProps } from './props';
import { BACKGROUND_COLOR } from './constants';


const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const uid = (): string => Math.random().toString(36).substring(6);
const uniqueId = (uniqueKey?: string) => uniqueKey || uid();
const animationDuration = (speed: number): number => speed * 1000;
const animationDelay = (duration: number, interval: number): number => interval * duration;
const getColor = (themeColor: ColorValue, color?: ColorValue) => color || themeColor

export default class extends React.Component<IContentLoaderProps> {
  static contextType = ThemeContext;
  declare context: React.ContextType<typeof ThemeContext>

  static defaultProps = {
    animate: true,
    speed: 1.2,
    interval: 0.25
  }
  
  private unmounted = false;
  private animatedValue = new Animated.Value(-1);
  private fixedId = uniqueId(this.props.uniqueKey);
  private idClip = `${this.fixedId}-diff`;
  private idGradient = `${this.fixedId}-animated-diff`;

  setAnimation = () => {
    //? props.speed is in seconds as it is compatible with web convert to milliseconds
    const durMs = animationDuration(this.props.speed!);
    const delay = animationDelay(durMs, this.props.interval!)

    Animated.timing(this.animatedValue, {
      toValue: 2,
      delay: delay,
      duration: durMs,
      useNativeDriver: true,
    }).start(() => {
      if (!this.unmounted && this.props.animate) {
        this.animatedValue.setValue(-1)
        this.setAnimation()
      }
    })
  }

  componentDidMount = () => {
    if (this.props.animate) {
      this.setAnimation()
    }
  }

  componentDidUpdate(prevProps: IContentLoaderProps) {
    if (!prevProps.animate && this.props.animate) {
      this.setAnimation()
    }
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  render() {
    const {
      children,
      backgroundColor,
      foregroundColor,
      beforeMask,
      uniqueKey,
      animate,
      speed,
      ...props
    } = this.props

    const x1Animation = this.animatedValue.interpolate({
      extrapolate: 'clamp',
      inputRange: [-1, 2],
      outputRange: ['-100%', '100%'],
    });

    const x2Animation = this.animatedValue.interpolate({
      extrapolate: 'clamp',
      inputRange: [-1, 2],
      outputRange: ['0%', '200%'],
    });

    return (
      <Svg {...props}>
        {beforeMask && React.isValidElement(beforeMask) ? beforeMask : null}

        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill={`url(#${this.idClip})`}
          clipPath={`url(#${this.idGradient})`}
        />

        <Defs>
          <ClipPath id={this.idGradient}>{children}</ClipPath>

          <AnimatedLinearGradient
            id={this.idClip}
            x1={x1Animation}
            x2={x2Animation}
            y1={0}
            y2={0}
          >
            <Stop offset={0} stopColor={getColor(BACKGROUND_COLOR[this.context.colorScheme!], backgroundColor)} />
            <Stop offset={0.5} stopColor={getColor(this.context.colors.card, foregroundColor)} />
            <Stop offset={1} stopColor={getColor(BACKGROUND_COLOR[this.context.colorScheme!], backgroundColor)} />
          </AnimatedLinearGradient>
        </Defs>
      </Svg>
    )
  }
}