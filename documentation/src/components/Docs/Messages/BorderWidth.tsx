/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 22:18:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 00:07:04
 * @ Description: Examples of Message component with different border width.
 */


import React from "react";
// highlight-next-line
import Message from "@flexnative/messages";

import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Message color='primary' borderWidth='none' text={messageTemplate('`none`')}/>
        <Message color='primary' borderWidth='hairline' text={messageTemplate('`hairline`')} />
        <Message color='primary' borderWidth='thin' text={messageTemplate('`thin`')}  />
        <Message color='primary' borderWidth='base' text={messageTemplate('`base`')} />
        <Message color='primary' borderWidth='thick' text={messageTemplate('`thick`')} />
        <Message color='primary' borderWidth={5} text={messageTemplate('5')} />
      </div>
    );
  }
}