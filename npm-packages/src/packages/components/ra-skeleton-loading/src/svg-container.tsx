/**
 * @ Author: Redon Alla
 * @ Create Time: 2023-10-08 12:58:28
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-11-27 17:04:10
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


/**
 * `AnimatedLinearGradient` is a component that combines the functionality of 
 * `Animated` and `LinearGradient` to create an animated gradient effect.
 *
 * This component is created using `Animated.createAnimatedComponent` which 
 * allows the `LinearGradient` component to be animated using the `Animated` API.
 *
 * @component
 */
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

/**
 * Generates a unique identifier string.
 *
 * @returns {string} A unique identifier string.
 */
const uid = (): string => Math.random().toString(36).substring(6);

/**
 * Generates a unique identifier.
 *
 * @param {string} [uniqueKey] - An optional unique key to use. If not provided, a new unique identifier will be generated.
 * @returns {string} The unique identifier.
 */
const uniqueId = (uniqueKey?: string) => uniqueKey || uid();

/**
 * Calculates the animation duration in milliseconds based on the given speed.
 *
 * @param speed - The speed factor to determine the duration.
 * @returns The animation duration in milliseconds.
 */
const animationDuration = (speed: number): number => speed * 1000;

/**
 * Calculates the animation delay based on the given duration and interval.
 *
 * @param {number} duration - The duration of the animation.
 * @param {number} interval - The interval between animations.
 * @returns {number} - The calculated animation delay.
 */
const animationDelay = (duration: number, interval: number): number => interval * duration;

/**
 * Gets the color value.
 *
 * @param {ColorValue} themeColor - The theme color.
 * @param {ColorValue} [color] - The color value.
 * @returns {ColorValue} - The color value.
 */
const getColor = (themeColor: ColorValue, color?: ColorValue) => color || themeColor

/**
 * SvgContainer is a React component that renders an SVG with an animated gradient.
 * It uses the Animated API to create a smooth transition effect for the gradient.
 * 
 * @extends {React.Component<IContentLoaderProps>}
 * 
 * @property {boolean} [animate=true] - Determines if the animation should run.
 * @property {number} [speed=1.2] - Speed of the animation in seconds.
 * @property {number} [interval=0.25] - Interval between animation loops in seconds.
 * 
 * @method setAnimation - Sets up and starts the animation.
 * @method componentDidMount - Lifecycle method that starts the animation if `animate` prop is true.
 * @method componentDidUpdate - Lifecycle method that restarts the animation if `animate` prop changes to true.
 * @method componentWillUnmount - Lifecycle method that sets the `unmounted` flag to true to stop the animation.
 * 
 * @param {IContentLoaderProps} props - The properties passed to the component.
 * @param {React.ContextType<typeof ThemeContext>} context - The theme context used for styling.
 * 
 * @returns {JSX.Element} The rendered SVG element with animated gradient.
 */
export default class SvgContainer extends React.Component<IContentLoaderProps> {
  /**
   * Specifies the context type that this component subscribes to.
   * This property is used to consume the `ThemeContext` within the component.
   * 
   * @type {React.Context<ThemeContextType>}
   */
  static contextType = ThemeContext;

  /**
   * Declares a context variable that uses the type of the ThemeContext.
   * This context is used to provide theming capabilities to the component.
   * 
   * @type {React.ContextType<typeof ThemeContext>}
   */
  declare context: React.ContextType<typeof ThemeContext>

  /**
   * Default properties for the SVGContainer component.
   * 
   * @property {boolean} animate - Determines if the animation should be enabled.
   * @property {number} speed - Speed of the animation.
   * @property {number} interval - Interval between animation frames.
   */
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

  /**
   * Sets up and starts the animation for the component.
   * 
   * This method configures an animation using the `Animated.timing` function.
   * It calculates the duration and delay for the animation based on the 
   * `props.speed` and `props.interval` values. The animation runs with 
   * `useNativeDriver` set to true for better performance.
   * 
   * Once the animation completes, it checks if the component is still mounted 
   * and if the `animate` prop is true. If both conditions are met, it resets 
   * the animated value and restarts the animation.
   * 
   * @private
   */
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
            <Stop offset={0} stopColor={getColor(BACKGROUND_COLOR[this.context.scheme!], backgroundColor)} />
            <Stop offset={0.5} stopColor={getColor(this.context.colors.card, foregroundColor)} />
            <Stop offset={1} stopColor={getColor(BACKGROUND_COLOR[this.context.scheme!], backgroundColor)} />
          </AnimatedLinearGradient>
        </Defs>
      </Svg>
    )
  }
}