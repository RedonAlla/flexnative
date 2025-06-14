/**
 * @ Author: Redon Alla
 * @ Modified by: Redon Alla
 * @ Description: Helper component for conditionally render a component.
 */

import React from 'react';

export type RenderFCProp<Props> = (props?: Props) => React.ReactElement;

export type RenderProp<Props> = RenderFCProp<Props> | React.ReactElement;

export type FalsyFCProps<Props> = Props & {
  component?: React.ReactElement;
  reactElement?: React.ReactElement;
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
    const { component, reactElement, ...props } = this.props;

    if (reactElement) {
      return reactElement;
    }

    return component ? React.cloneElement(component as React.ReactElement, props) : null;
  }
}