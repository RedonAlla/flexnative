/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 22:18:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-04 23:59:38
 * @ Description: Examples of Message component with different border radius.
 */

import React from "react";
// highlight-next-line
import Message from "@flexnative/messages";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Message color='primary' radius='none' text={messageTemplate('`none`')}/>
        <Message color='primary' radius='small' text={messageTemplate('`small`')} />
        <Message color='primary' radius='medium' text={messageTemplate('`medium`')}  />
        <Message color='primary' radius='large' text={messageTemplate('`large`')} />
        <Message color='primary' radius='full' text={messageTemplate('`full`')} />
        <Message color='primary' radius={12} text={messageTemplate('12')} />
      </div>
    );
  }
}