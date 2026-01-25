/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-09 20:02:00
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-14 00:32:42
 * @ Description: Defines two custom types, `AppProps` and `AppLinkProps`, which are used to describe the structure of objects that hold properties for components in a `AppHome` screen.
 */

import { ColorValue } from "react-native";


/**
 * Define a type `AppProps` which contains a single property `colors`.
 * The `colors` property is of type `BaseColors`, which is assumed to be defined elsewhere in the codebase.
 * This type can be used for components that need basic color configurations.
 */
export type AppProps = {
  paddingTop?: number;
}

/**
 * Define a type `AppLinkProps` with various properties to describe link elements within the application.
 */
export type AppLinkProps = {
  /**
   * `href` specifies the URL or path where the link will navigate when clicked.
   */
  href: string;

  /**
   * `title` provides a text title for the link, often displayed as a tooltip or used for accessibility purposes.
   */
  title: string;

  /**
   * `description` offers a textual description of the link's purpose or destination.
   */
  description: string;

  /**
   * `colors` defines styling attributes specifically for the link component.
   */
  colors: {
    /**
     * `text` is a type `ColorValue` representing the link's text color.
     */
    text: ColorValue;

    /**
     * `borders` is a type `ColorValue` indicating the border color of the link.
     */
    borders: ColorValue;

    /**
     * `background` is a type `ColorValue` specifying the background color of the link.
     */
    background: ColorValue;
  };

  /**
   * `children` represents the React element(s) nested inside the link, utilized to maintain a flexible structure.
   */
  children: React.ReactElement;
}
