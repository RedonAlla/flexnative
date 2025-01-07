/**
 * @ Author: Redon Alla
 * @ Create Time: 2025-01-04 22:18:34
 * @ Modified by: Redon Alla
 * @ Modified time: 2025-01-05 00:22:43
 * @ Description: Examples of Message component with fill mode.
 */

import React from "react";
// highlight-next-line
import Message from "@flexnative/messages";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <div className='example-block'>
        <Message fill='ghost' color='primary' text={messageTemplate('`ghost`', ghostMessage)}/>
        <Message fill='ghost' color='warning' text={messageTemplate('`ghost`', ghostMessage)} />
        <Message fill='ghost' color='crimson' text={messageTemplate('`ghost`', ghostMessage)}  />
        <Message fill='ghost' color={'#ed143d'} text={messageTemplate('ghost', ghostMessage)} />
        <Message fill='ghost' color={'rgb(237, 20, 61)'} text={messageTemplate('ghost', ghostMessage)}/>
        <Message fill='ghost' color={'rgba(237, 20, 61, 0.5)'} text={messageTemplate('ghost', ghostMessage)} />
        <Message fill='solid' color='primary' text={messageTemplate('`solid`', ghostMessage)} />
        <Message fill='solid' color='warning' text={messageTemplate('`solid`', ghostMessage)} />
        <Message fill='solid' color='crimson' text={messageTemplate('`solid`', ghostMessage)}  />
        <Message fill='solid' color={'#ed143d'} text={messageTemplate('solid', ghostMessage)} />
        <Message fill='solid' color={'rgb(237, 20, 61)'} text={messageTemplate('solid', ghostMessage)}/>
        <Message fill='solid' color={'rgba(237, 20, 61, 0.5)'} text={messageTemplate('solid', ghostMessage)} />
      </div>
    );
  }
}

const ghostMessage = "To have nice effect for fill='ghost' type using custom colors use hex color with a specific opacity.";