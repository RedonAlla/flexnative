/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-05-01 16:19:11
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-05-24 20:56:11
 * @ Description: This file exports a `TextBox` component, which acts as a wrapper for different styles of text input fields.
 * It dynamically renders a specific text box style based on the `look` prop provided.
 * Available styles include 'default', 'material', and 'inline'.
 */

import React from 'react';
import TextBoxDefault from './TextBoxDefault';
import TextBoxMaterial from './TextBoxMaterial';
import TextBoxInline from './TextBoxInline';
import { TextBoxProps } from './TextBox.props';


const COMPONENTS = {
  default: TextBoxDefault,
  material: TextBoxMaterial,
  inline: TextBoxInline,
}

/**
 * A wrapper component for different text box styles.
 *
 * This component dynamically renders a text input field based on the `look` prop.
 * It supports three different styles: 'default', 'material', and 'inline'.
 * If no `look` prop is provided or the provided value is not recognized, it defaults to the 'default' style.
 *
 * @param {TextBoxProps} props - The properties for the text box.
 * @returns {JSX.Element} The rendered text box component.
 *
 * @example
 * // Render a default text box:
 * <TextBox placeholder="Enter text" />
 *
 * @example
 * // Render a material style text box:
 * <TextBox look="material" label="Enter text" />
 *
 * @example
 * // Render an inline style text box:
 * <TextBox look="inline" label="Enter text" />
 */
const TextBox = (props: TextBoxProps) => {
  const Component = COMPONENTS[props.look || 'default'] || TextBoxDefault;
  return <Component {...props} />;
};

export default TextBox;