/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 22:18:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 00:27:08
 * @ Description: Examples of Message component with different sizes.
 */

import React from "react";
// highlight-next-line
import Message from "@flexnative/messages";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Message color='info' size='small' text={messageTemplate('`small`')} />
        <Message color='info' text={messageTemplate('`default`')}/>
        <Message color='info' size='medium' text={messageTemplate('`medium`')}  />
        <Message color='info' size='large' text={messageTemplate('`large`')} />
        <Message color='info' size={5} text={messageTemplate('5')} />
      </div>
    );
  }
}