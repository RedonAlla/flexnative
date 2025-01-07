/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 22:18:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-04 22:38:11
 * @ Description: Examples of Message component with different colors.
 */

import React from "react";

// highlight-next-line
import Message from '@flexnative/messages';
import { Color } from "@flexnative/theme-context";
import { frameworkColors } from "../../constants";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        {
          frameworkColors.map((color, index) =>
            <Message key={index} text={messageTemplate(color as string)} color={color as Color} />
          )
        }

        <Message text={messageTemplate('crimson')} color={'crimson'} />
        <Message text={messageTemplate('#ed143d')} color={'#ed143d'} />
        <Message text={messageTemplate('rgb(237, 20, 61)')} color={'rgb(237, 20, 61)'} />
        <Message text={messageTemplate('rgba(237, 20, 61, 0.5)')} color={'rgba(237, 20, 61, 0.5)'} />
      </div>
    );
  }
}