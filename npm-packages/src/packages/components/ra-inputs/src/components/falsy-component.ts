import React from 'react';

export type RenderFCProp<Props> = (props?: Props) => React.ReactElement;

export type RenderProp<Props> = RenderFCProp<Props> | React.ReactElement;

export type FalsyFCProps<Props> = Props & {
  shouldRender: boolean;
  component?: RenderProp<Props>;
  fallback?: React.ReactElement;
  test?: React.ReactElement;
};

/**
 * Helper component for conditionally render a component.
 *
 * Accepts props of a component that is expected to be rendered,
 * and `component` which may be a string, a function, null or undefined.
 *
 * If it is a function, will call it with props passed to this component.
 * Otherwise, will return null.
 *
 * @property {RenderProp} component - Function component to be rendered.
 * @property {React.ReactElement} fallback - Element to render if children is null or undefined.
 *
 * @example Will render nothing.
 * ```
 * <FalsyComponent />
 * ```
 *
 * @example Will render red title.
 * ```
 * const Title = () => (
 *   <FalsyComponent
 *     style={{ color: 'red' }}
 *     component={props => <Text {...props}>Title</Text>}
 *   />
 * );
 * ```
 */
export default class FalsyComponent<Props> extends React.PureComponent<FalsyFCProps<Props>> {
  static defaultProps = {
    shouldRender: true
  }

  public render() {
    const { component, test, fallback, shouldRender, ...props } = this.props;

    if(!shouldRender)
      return null;

    if (!component)
      return fallback || null;

    if (React.isValidElement(component))
      return React.cloneElement(component, props);

    return React.createElement(component as string | React.FunctionComponent<{}> | React.ComponentClass<{}, Props>, props);
  }
}