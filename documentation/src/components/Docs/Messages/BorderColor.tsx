/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 22:18:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-04 22:56:37
 * @ Description: Examples of Message component with different borders colors.
 */

import React from "react";
// highlight-next-line
import Message from "@flexnative/messages";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Message borderColor='crimson' borderWidth='hairline' text={messageTemplate('`crimson`')}  />
        <Message borderColor='#ed143d' borderWidth='hairline' text={messageTemplate('#ed143d')} />
        <Message borderColor='rgb(237, 20, 61)' borderWidth='hairline' text={messageTemplate('rgb(237, 20, 61)')}/>
        <Message borderColor='rgba(237, 20, 61, 0.5)' borderWidth='hairline' text={messageTemplate('rgba(237, 20, 61, 0.5)')} />    
      </div>
    );
  }
}
