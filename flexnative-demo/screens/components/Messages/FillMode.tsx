import React from "react";
import Message from "@flexnative/messages";
import { Block } from "@flexnative/layout";

import DemoBlock from "@/components/common/DemoBlock";
import { DEMO_COMPONENT_GAP } from "@/constants/layout";
import { messageTemplate } from "./utilities";


export default class extends React.PureComponent {
  public render() {
    return (
      <DemoBlock title='Fill Mode'>
        <Block row gap={DEMO_COMPONENT_GAP}>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message fill='ghost' color='primary' text={messageTemplate('`ghost`', ghostMessage)}/>
            <Message fill='ghost' color='warning' text={messageTemplate('`ghost`', ghostMessage)} />
            <Message fill='ghost' color='crimson' text={messageTemplate('`ghost`', ghostMessage)}  />
            <Message fill='ghost' color={'#ed143d'} text={messageTemplate('ghost', ghostMessage)} />
            <Message fill='ghost' color={'rgb(237, 20, 61)'} text={messageTemplate('ghost', ghostMessage)}/>
            <Message fill='ghost' color={'rgba(237, 20, 61, 0.5)'} text={messageTemplate('ghost', ghostMessage)} />
          </Block>

          <Block flex={1} gap={DEMO_COMPONENT_GAP}>
            <Message fill='solid' color='primary' text={messageTemplate('`solid`', ghostMessage)} />
            <Message fill='solid' color='warning' text={messageTemplate('`solid`', ghostMessage)} />
            <Message fill='solid' color='crimson' text={messageTemplate('`solid`', ghostMessage)}  />
            <Message fill='solid' color={'#ed143d'} text={messageTemplate('solid', ghostMessage)} />
            <Message fill='solid' color={'rgb(237, 20, 61)'} text={messageTemplate('solid', ghostMessage)}/>
            <Message fill='solid' color={'rgba(237, 20, 61, 0.5)'} text={messageTemplate('solid', ghostMessage)} />
          </Block>
          
        </Block>
      </DemoBlock>
    );
  }
}

const ghostMessage = "To have nice effect for fill='ghost' type using custom colors use hex color with a specific opacity.";